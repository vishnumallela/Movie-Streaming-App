import React from 'react'
import './planscreen.css'
import db from'../Firebase'
import { useState } from 'react'
import { useEffect } from 'react'
import {loadStripe} from "@stripe/stripe-js";
import {selectUser} from '../features/counter/userSlice'
import { useSelector } from 'react-redux'






function PlanScreen() {

    const user=useSelector(selectUser);

    const[subscription,setSubscription]=useState(null);
    useEffect(() => {
        db.collection('customers')
        .doc(user.uid)
        .collection('subscriptions')
        .get()
        .then(querySnapshot=>{
            querySnapshot.forEach(async subscription=>{
                setSubscription({role:subscription.data().role,
                    current_period_end:subscription.data().current_period_end.seconds,
                current_period_start:subscription.data().current_period_start.seconds})
            })
        })
    },[user.uid]);

    console.log(subscription);

    const loadCheckout= async (priceId)=>{

        const docRef =await db
        .collection("customers")
        .doc(user.uid)
        .collection("checkout_sessions")
        .add({
            price :priceId,
            success_url:window.location.origin,
            cancel_url:window.location.origin,
        });
    docRef.onSnapshot(async (snap)=>{
            const{ error,sessionId}=snap.data();
            if(error){
                alert(`an error occured:${error.message}`);
            }
            if(sessionId){
                const stripe = await loadStripe("pk_test_51J3EqUSDRuNSm1nslp10mLiEhNnHyZTwADUZ3WNp8AZAOGem3RXRVzJWkJzfGZJ0iUi1pIjnwcDGYXftu0PasMq100SQ1gIaco");
                stripe.redirectToCheckout({sessionId});
            }
           
        });

    }

    const[products,setProducts] =  useState([])
    

    useEffect(() => {

        db.collection('products')
        .where("active","==",true)
        .get()
        .then(querySnapshot=>{
            const products={};
            querySnapshot.forEach(async (productDoc)=>{
                products[productDoc.id]=productDoc.data();
                const pricesnap = await productDoc.ref.collection("prices").get();
                pricesnap.docs.forEach((price)=>{
                    products[productDoc.id].prices ={
                        priceId :price.id,
                        priceData :price.data(),
                    };
                });
            });

            setProducts(products);

        });
    
       
    }, [])

    console.log(products)
    return (
        <div className="planscreen">

            {Object.entries(products).map(([productId,productData])=>{
                //add some logic to user subscription

                return(
                    <div className="planscreen_plans">
                        <div className="planscreen_info">

                            <h5>{productData.name}</h5>
                            <h6>{productData.description}</h6>
                        </div>
                        <button onClick={()=>{loadCheckout(productData.prices.priceId)}}>Subscribe</button>
                    </div>

                )
            })}
            
        
        </div>

    )
}

export default PlanScreen

import React from 'react'
import './Signupscreen.css'
import { useRef } from 'react'
import { auth } from '../Firebase'

function Signupscreen() {

    const emailRef = useRef(null);
    const passRef =useRef(null);

    const register =(e)=>{
        e.preventDefault();

        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passRef.current.value
        ).then((authUser) => {
            console.log(authUser)


        }).catch((error)=>{
            alert(error.message);
        });
    }
    
    

    const signIn=(e)=>{
            e.preventDefault();
            auth.signInWithEmailAndPassword(emailRef.current.value,passRef.current.value).then((authUser)=>{
                console.log(authUser);
            }).catch((error)=>{
                alert(error.message)
            })

    }
    


    return (
        <div className="signupscreen">
           
          
            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} type='email'placeholder="Email"/>
                <input ref={passRef} type='password' placeholder="Password"/>
                <button onClick={signIn} type="submit">Sign In</button>

                <h4><span className="signupscreenh4">New to Netflix?</span> <span className="signupscreenlink" onClick={register}>Sign Up now.</span></h4>
            </form>
            </div>
      
    )
}

export default Signupscreen


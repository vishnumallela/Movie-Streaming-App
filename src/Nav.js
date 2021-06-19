import React  from 'react'
import {useState} from 'react'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import logo from './logo.png'

import './Nav.css'

function Nav() {

    const history = useHistory();

    useEffect(()=>{
        window.addEventListener("scroll",handleScroll);
        return ()=>window.removeEventListener("scroll",handleScroll)
        
    },[]);
  

     
    const[show,setShow]=useState(false);
    
    const handleScroll =()=> {
        if(window.scrollY>30){
            setShow(true)
        }else {
            setShow(false)

        }

   }

    
    
    
    return (
        <div className={show ? 'nav nav_black' : 'nav'}>
           <div className="navcontainer">
          
          <img onClick={()=>{
              history.push("/")
          }} class="logo" src={logo}/>
            <img onClick={()=>{
                history.push("/profile")
            }} class="avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"/>

            </div>
        </div>
    )
}

export default Nav

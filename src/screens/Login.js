import React from 'react'
import "./Login.css"
import { useState } from 'react'
import SigninScreen  from './Signupscreen';
import logo from'../logo.png';

function Login() {

    const [signIn,setSignIn ]=useState(false)

    return (
        <div className="loginscreen">
            <div className="loginscreenbg">

                <img className="loginscreenlogo" src={logo}/>
                <button onClick={()=>{setSignIn(true)}} className='loginscreenbtn'>Sign In</button>

                <div className="logingradient"/>

            </div>
<div className="loginscreenbody">

   {signIn? (<SigninScreen/>):(
   <>
     <h1> Unlimited films, TV programmes and more.</h1>
    <h2> Watch anywhere. Cancel at any time.</h2>
    <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
    <div className="loginscreeninput">
        <form>
        <input type='email' placeholder='Email address'/>
        <button onClick={()=>{setSignIn(true)}}className="emailbutton" >Get Started ></button>
        </form>

        
    </div> 
  

    </>
    
  
    )}
    </div>

    </div>
    )
    
}

export default Login;

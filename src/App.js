import React from 'react';
import './App.css';
import Homescreen from './screens/HomeScreen';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Login from './screens/Login';
import { useEffect } from 'react';
import { auth } from './Firebase';
import { useDispatch ,useSelector} from 'react-redux';
import ProfileScreen from './screens/ProfileScreen';


import { login,logout ,selectUser} from './features/counter/userSlice';

function App() {
const user = useSelector(selectUser)
const dispatch = useDispatch();
useEffect(()=>{

  const unsubscribe =auth.onAuthStateChanged(userAuth=>{
    if(userAuth){
      
      dispatch(login({
        uid: userAuth.uid,
        email:userAuth.email,
      }
      ))

    }else{
dispatch(logout())
    }
  })
  return()=>{
    unsubscribe();
  }

},[dispatch])

  
  return (
 <div className="app">

<Router>
  {!user? (<Login/>) :(   <Switch>

    <Route path="/profile">
      <ProfileScreen/>
    </Route>
        <Route exact path="/">
          <Homescreen/>
        </Route>
      </Switch>        )}
      
    </Router>
    
   
    </div>
    
  );
}

export default App;

import React from 'react'
import './Profilescreen.css'
import Nav from '../Nav'
import { useSelector } from 'react-redux'
import {selectUser} from '../features/counter/userSlice'
import {auth} from '../Firebase'
import PlansScreen from './PlanScreen'





function ProfileScreen() {

  const user = useSelector(selectUser);
    return (


        <div className="profilescreen">
          <Nav/>
          <div className="profile_screen_body">
            <h1>Edit Profile</h1>
            <div className="profile_screen_info">
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"/>
              <div className="profile_screen_details">
                <h2> {user.email}</h2>
                <div className="profile_screen_plans">
                  <h3>Plans</h3>

                  <PlansScreen/>
                




                  <button onClick={()=>{
                    auth.signOut()
                  }} className="profilescreensignout"> Sign Out</button>

                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default ProfileScreen

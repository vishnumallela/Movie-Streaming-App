import React from 'react'
import './Banner.css'
import { useEffect } from 'react'
import { useState } from 'react'
import requests from './Requests'
import axios from './axios'


function Banner() {

    const [movie, setMovie] = useState([]);
   

  
    useEffect(() => {
        async function fetchdata() {
            
        const request = await axios.get(requests.fetchNetflixOriginals);
        setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length-1)]);
       };
       

       fetchdata();

   },[])




    const trunkate=(string,n)=>{
        return string?.length > n ? string.substring(0,n-1)+'.....': string;

    }
    return (
     <header  className="banner" style={{backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`}}>
        <div className="bannercontents">
            
            <h1 class="bannertitle" >{movie?.original_name}</h1>
        
            <div className="bannerbuttons">
            <button className="bannerbutton">Play</button>
            <button className="bannerbutton">My List</button>
            </div>

           <div className="bannerdiscription"> <h1>{ trunkate(movie?.overview, 150)}</h1></div>
        </div>
     <div className="banner-fadebottom"/>
     </header>
    )
}

export default Banner

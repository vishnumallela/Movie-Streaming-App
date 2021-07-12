import React from 'react'
import './Homescreen.css'
import Navbar from '../Nav'
import Banner from '../Banner';
import Row from '../Row';
import requests from '../Requests';

function Homescreen() {
    return (
        <div className="homescreen">
              
              <Navbar/>

              <Banner/>

               <Row title="NETFLIX ORIGINALS" fetchurl={requests.fetchNetflixOriginals} isLargerow />
                <Row title="Trending Now" fetchurl={requests.fetchTrending}/>
                
                 <Row title="Romantic Movies" fetchurl={requests.fetchRomanceMovies}/>
                 <Row title="Documentaries" fetchurl={requests.fetchDocumentaries}/>
                 <Row title="Comedy Movies" fetchurl={requests.fetchComedyMovies}/>
                 <Row title="Horror Movies" fetchurl={requests.fetchHorrorMovies}/>
             
             
            

            
        </div>
    )
}

export default Homescreen

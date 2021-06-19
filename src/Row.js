import React from 'react'
import './Row.css'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from './axios'
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

function Row({title, fetchurl, isLargerow}) {

    const[movies,setMovies]=useState([])
    const [trailerUrl, setTrailerUrl] = useState("");

    const baseurl= "https://image.tmdb.org/t/p/original";

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
          autoplay: 0,
        }
      }


    useEffect(() => {
        async function fetchdata() {
            
        const request = await axios.get(fetchurl);
        setMovies(request.data.results);
       };
       

       fetchdata();

   },[fetchurl])

   console.log(movies)


   const handleClick = (movie) => {
    // console.table(movie?.title)
    if (trailerUrl) {
      setTrailerUrl('')
    } else {
      movieTrailer(movie?.title || "")
        .then(url => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
        }).catch((error) => console.log(error));
    }
  }











    return (
        <div className="row">
            <h2>{title} </h2>
<div className="row_posters">
            {
            movies?.map((movie) =>(

               (( isLargerow && movie.poster_path )|| (!isLargerow && movie.backdrop_path)) &&(

<img  onClick={() => handleClick(movie)} className={` row_poster ${isLargerow && "row_posterlarge"}` }  key={movie.id} src={`${baseurl}${isLargerow ? movie.poster_path : movie.backdrop_path}`}/>
                )
            
            
            ))
            
            }
</div>
<div style={{ padding: "40px"}}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
        </div>
    )
}

export default Row

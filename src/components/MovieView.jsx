import Hero from './Hero.jsx'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from "react"

const MovieView =() =>{
  const {id} = useParams()

  const [movieDetails, setMovieDetails] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() =>{
   fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=6c8d069db923c75ab549f68ec5de231b&language=en-US`)
    .then(response => response.json())
    .then(data=> {
      setMovieDetails(data)
      setIsLoading(false)
    })
  }, [id])


  function renderMovieDetails(){
    if(isLoading){
      return <Hero text="Loading..." />
    }
    if(movieDetails){
      const posterPath = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
      const backdropUrl = `https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`
      
      return(
        <>
          <Hero text={movieDetails.original_title} backdrop={backdropUrl}/>
          <div className="container headfirst">
          <div className="row">
           <div className="col-md-3"> 
             <img src={posterPath} alt="movie image" 
               className="img-fluid shadow rounded"/>
           </div>
           <div className="col-md-9"> 
           <h2 className="font-weight-bold headfirst">{movieDetails.original_title}</h2>
             <hr/>
           <p className="font-italic bg-light headtext"> {movieDetails.tagline}</p>
           <p className="font-italic headsec"> Summary: {movieDetails.overview}</p>
           <p className="font-italic headsecglastl"> Genre:  {movieDetails.genres[0].name} {movieDetails.genres[1].name} {movieDetails.genres[2].name}</p>
             <hr/>
           <p className="font-italic budg"> Budget: Approx ${movieDetails.budget}</p>
             <p className="font-italic headsecgt"> Revenue: Approx ${movieDetails.revenue}</p>
             <p className="font-italic headsecgo"> Total Runtime: {movieDetails.runtime} </p>
             <p className="font-italic headsecgt"> Release Date : {movieDetails.release_date} </p>
           <p className="font-italic bgsuc"> Popularity: {movieDetails.popularity} out of 100</p>
             <p> Production Company : {movieDetails.production_companies[0].name} and others.
             </p>
           <p className="font-italic headsecg"> More Information: {movieDetails.homepage} </p>
             
           </div>
          </div>
          </div>
        </>
      ) 
    }
  }
  
  return renderMovieDetails()
}
export default MovieView
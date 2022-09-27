import Hero from './Hero.jsx'
import { Link } from 'react-router-dom'

const MovieCard =({ movie }) =>{
  
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
  const detailUrl =`/movies/${movie.id}`
  
  return(
    <div className="col-lg-3 col-md-3 col-2 my-4">
    <div className="card">
  <img src={posterUrl} className="card-img-top" alt={movie.original_title}/>
  <div className="card-body">
    <h5 className="card-title">{movie.original_title}</h5>
    <Link to={detailUrl} className="btn btn-primary">Movie Details</Link>
  </div>
</div>
    </div>
  )
}



const Search =({keyword, searchResult}) =>{
const title= `You are searching for ${keyword}`

  const results = searchResult.map((obj, i) => {
    return <MovieCard movie={obj} key={i} />
  })
  
  
  return(
    <>
      <Hero text={title}/>
      {results &&
      <div className="container">
      <div className="row">
        {results}
      </div>
      </div>}
    </>
  )
}
export default Search

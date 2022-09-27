import { useState, useEffect } from 'react'
import './App.css'
import NavBar from './components/NavBar.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Search from './components/Search.jsx'
import MovieView from './components/MovieView.jsx'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


export default function App() {

  const [searchResult, setSearchResult] = useState([]);
  const [searchText, setSearchText] = useState('');


  useEffect(()=> {
    if(searchText){
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=ab166ff82684910ae3565621aea04d62&language=en-US&query=${searchText}&page=1&include_adult=false`)
    .then(response => response.json())
    .then(data =>{
      console.log(data)
      setSearchResult(data.results)
    })
    }
    
  }, [searchText])


  return (
    <>
      <BrowserRouter>
      <NavBar searchText={searchText} setSearchText={setSearchText}/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path="/about" element={<About/>} />
          <Route path="/search" 
            element={<Search 
                       keyword={searchText} searchResult={searchResult}/>} />
          <Route path="/movies/:id" element={<MovieView/>} />
        </Routes>
        </BrowserRouter>
        
    </>
  )
}

import { useEffect, useState } from 'react'
import "./App.css"
import SearchIcon from "./search.svg"
import MovieCard from './MovieCard'


const API_KEY_URL = "https://api.themoviedb.org/3/movie/popular?api_key=52db7a308eb4f513e51a7ce973664f67";
// const API_SEARCH = "https://api.themoviedb.org/3/search/movie?api_key=52db7a308eb4f513e51a7ce973664f67";


const App = () => {


    const [searchText, setSearchText] = useState("");
    const [movies, setMovies] = useState([]);
    
    
    useEffect(() => {
        fetch(API_KEY_URL)
        .then((res)=>res.json())
        .then(data=>{
            console.log(data)
            setMovies(data.results)
         })
        
 } ,[])


 const searchMovie = async(e)=>{
    e.preventDefault();
    
    try{
      const url=`https://api.themoviedb.org/3/search/movie?api_key=52db7a308eb4f513e51a7ce973664f67&query=${searchText}`;
      const res= await fetch(url);
      const data= await res.json();
      console.log(data);
      setMovies(data.results);
    }
    catch(e){
      console.log(e);
    }
  }

    return (
        <div className='app'>
        <h1>MoviePedia</h1>
        <div className='search'>
            <input
            placeholder='Search for movies'
            value={searchText}
            onChange= { (event) => setSearchText(event.target.value) }
            />
            <img 
                src={SearchIcon}
                alt='search_img'
                onClick={searchMovie}
            />
        </div>
        { movies.length > 0 ? <div className="container">
        {movies.map((movieReq)=>
            <MovieCard key={movieReq.id} {...movieReq}/>
        )}
        </div> :
        <div className='empty'>
            <h3>No movies Found</h3>
        </div>}
        
        </div>
        
    )

}

export default App
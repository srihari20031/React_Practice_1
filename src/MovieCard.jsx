import React from "react";
const IMAGE_URL = "https://image.tmdb.org/t/p/w500/"

const MovieCard = ({title, release_date, poster_path, original_language}) => {
    
    return (
        
       
         <div className='movie'>
         <div>
         {release_date}
         </div>  
      <div>
        <img
        src={ poster_path !== "" ? IMAGE_URL + poster_path: "https://via.placeholder.com/400" }
        alt="img"
         />
      </div>
      <div>
        <span>{original_language}</span>
        <h3>{title}</h3>
      </div>

      
        </div>
    )

}


export default MovieCard
import React from "react";
function MovieCard({movie,addToWatchlist}){
    const imageUrl = "https://image.tmdb.org/t/p/w500";
    return(
        <div className="movie-card">
           
      {movie.poster_path ? (
        <img src={`${imageUrl}${movie.poster_path}`} alt={movie.title} className="movie-poster" />
      ) : (
        <div className="no-image">No Image Available</div>
      )}
        <h3>{movie.title}</h3>
        <button onClick={() => addToWatchlist(movie)}>+ Add to Watchlist</button>
        </div>
    )
}
export default MovieCard;
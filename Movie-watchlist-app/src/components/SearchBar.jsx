import React from "react";
function SearchBar({query,setQuery,searchMovies}){
    
    return(
        <div className="search-bar">
            <input type="text" placeholder="search for a movie..." value={query} onChange={(e)=> setQuery(e.target.value)}/>
            <button onClick={searchMovies}>Search here...</button>
        </div>
    )

}
export default SearchBar;
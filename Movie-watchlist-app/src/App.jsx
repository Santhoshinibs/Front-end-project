
import { useEffect, useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import Watchlist from './components/WatchList';

const API_KEY = "39ffc29c643dc4c5e61c6eecf56a24e3";

function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  
  useEffect(() => {
    const storedWatchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
    setWatchlist(Array.isArray(storedWatchlist) ? storedWatchlist : []);
  }, []);

  
  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  
  const searchMovies = () => {
    console.log("searchMovies function called!");
  
    if (!query) {
      console.log(" Search query is empty");
      return; 
    }
  
    console.log("Searching for:", query);
    
    const url = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_KEY}`;
  
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(" API Response:", data);
        setMovies(data.results || []);
      })
      .catch((error) => console.error(" Error fetching movies:", error));
  };
  

 
  const addToWatchlist = (movie) => {
    if (!watchlist.find((m) => m.id === movie.id)) {
      setWatchlist([...watchlist, movie]);
    }
  };


  const removeFromWatchlist = (id) => {
    setWatchlist(watchlist.filter((movie) => movie.id !== id));
  };

  return (
    <div className="app">
      <h1>Movie Watchlist</h1>
      <SearchBar query={query} setQuery={setQuery} searchMovies={searchMovies} />
      <MovieList movies={movies} addToWatchlist={addToWatchlist} />
      <Watchlist watchlist={watchlist} removeFromWatchlist={removeFromWatchlist} />
    </div>
  );
}

export default App;
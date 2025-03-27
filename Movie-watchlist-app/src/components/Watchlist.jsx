import React from "react";

function Watchlist({ watchlist, removeFromWatchlist }) {
    return (
        <div className="watchlist">
            <h2>Watchlist</h2>
            {watchlist.length === 0 ? (<p>No movies in watchlist</p>) : (
                watchlist.map((movie) => (
                    <div key={movie.id} className="watchlist-item">
                        <h3>{movie.title}</h3>
                        <button onClick={() => removeFromWatchlist(movie.id)}> Remove</button>
                    </div>
                ))
            )}
        </div>
    );
}

export default Watchlist;

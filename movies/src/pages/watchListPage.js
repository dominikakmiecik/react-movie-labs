
import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import { getMovie } from "../api/tmdb-api";
import Spinner from '../components/spinner'
import WriteReview from "../components/cardIcons/writeReview";
import PlaylistAddIcon from "../components/cardIcons/playlistIcon";

const WatchListPage = () => {
    const { watchlist: movieIds =[] } = useContext(MoviesContext);

    const WatchlistMovieQueries = useQueries(
        movieIds.map((movieId) => {
            return {
                queryKey: ["movie", { id: movieId }],
                queryFn:()=> getMovie(movieId),
            };
        })
    );

    if (movieIds.length === 0) {
        return(
        <div>
            your watch is empty
            </div>
        );
    }

    
    // Check if any of the parallel queries is still loading.
    const isLoading = WatchlistMovieQueries.some((m) => m.isLoading === true);

    if (isLoading) {
        return <Spinner />;
    }
    const isError = WatchlistMovieQueries.some((m) => m.isError);

    if (isError) {
        return (
            <div>
                Error cant find any movies
            </div>
        );
    }

    const movies = WatchlistMovieQueries.map((q) => {
        if (q.data && Array.isArray(q.data.genres))  {
            q.data.genre_ids = q.data.genres.map(g => g.id)
            return q.data
        }
        return null
    }).filter((movie) => movie !== null);

   
    return (
        <PageTemplate
            title="My Watchlist"
            movies={movies}
            action={(movie) => { 
              return (
                <>
                  
                    <WriteReview movie={movie} />
                    <PlaylistAddIcon movie={movie} />
                </>
            );
            }}
        />
    );
};

export default WatchListPage;

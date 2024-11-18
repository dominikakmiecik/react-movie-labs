import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import { getMovie } from "../api/tmdb-api";
import Spinner from '../components/spinner'
import WriteReview from "../components/cardIcons/writeReview";
import PlaylistAddIcon from "../components/cardIcons/playlistIcon";

const WatchListPage = () => {
    const { watchlist, movieIds } = useContext(MoviesContext);
    // Create an array of queries and run in parallel.
    const MustWatcMovieQueries = useQueries(
        movieIds.map((movieId) => {
            return {
                queryKey: ["movie", { id: movieId }],
                queryFn: getMovie,
            };
        })
    );
    // Check if any of the parallel queries is still loading.
    const isLoading = MustWatcMovieQueries.find((m) => m.isLoading === true);

    if (isLoading) {
        return <Spinner />;
    }

    const movies = MustWatcMovieQueries.map((q) => {
        q.data.genre_ids = q.data.genres.map(g => g.id)
        return q.data
    });

    const toDo = () => true;

    return (
        <PageTemplate
            title="My Watchlist"
            movies={watchlist}
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

export default WatchListPage;;
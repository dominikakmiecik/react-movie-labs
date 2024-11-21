import React from "react";
import { getTrendingMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import PlaylistIcon from "../components/cardIcons/playlistIcon";
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
const TrendingMoviesPage = (props) => {

    const { data, error, isLoading, isError } = useQuery("upcoming", getTrendingMovies);

    if (isLoading) {
        return <Spinner />
    }

    if (isError) {
        return <h1>{error.message}</h1>
    }
    const movies = data.results;

    // Redundant, but necessary to avoid app crashing.
    const favorites = movies.filter(m => m.favorite)
    localStorage.setItem('favorites', JSON.stringify(favorites))
 

    return (
        <PageTemplate
            title="Trending Movies"
            movies={movies}
            action={(movie) => {
                return (
                    <>

                        <PlaylistIcon movie={movie} />
                        <AddToFavoritesIcon movie={movie} />
                    </>
                );
            }}
        />
    );
};


export default TrendingMoviesPage;
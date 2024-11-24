import React from "react";
import { useParams } from 'react-router-dom';
import MovieDetails from "../components/movieDetails/";
import PageTemplate from "../components/templateMoviePage";
//import useMovie from "../hooks/useMovie";
import { getMovie, getCredits } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'
import useCast from "../hooks/useCast";
import ActorCard from "../components/actorCard"; // Import ActorCard
import Grid from "@mui/material/Grid";
const MoviePage = (props) => {
    const { id } = useParams();
    const { data: movie, error, isLoading, isError, credits, getCredits, actor } = useQuery(
        ["movie", { id: id }],
      
        getMovie, 
    );

    const [cast] = useCast(id);



    if (isLoading) {
        return <Spinner />;
    }

    if (isError) {
        return <h1>{error.message}</h1>;
    }

    return (
        <>
            {movie ? (
                <>
                    <PageTemplate movie={movie}>
                        <MovieDetails movie={movie} />
                        <div>
                            <h2>Cast</h2>
                            <Grid container spacing={2} border = '2px solid black' borderRadius ='10px' >
                            {cast.map((actor) => (
                                <ActorCard actor={actor}  />
                            ))}
                        </Grid>
                        </div>
                            
                    </PageTemplate>
                </>
            ) : (
                <p>Waiting for movie details</p>
            )}
        </>
    );
};

export default MoviePage;


import React, { useContext } from "react";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import IconButton from "@mui/material/IconButton";
import { MoviesContext } from "../../contexts/moviesContext";


const PlaylistIcon = ({ movie }) => {
    const context = useContext(MoviesContext);

    const handleClick = (e) => {
        e.preventDefault();
        console.log("Adding to mustwatch", movie);
        context.addToMustWatch(movie);
    };
    return (

        <IconButton onClick={handleClick} aria-label="add to playlist">
            <PlaylistAddIcon color="primary" />
        </IconButton>

    );
};

export default PlaylistIcon;
import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { MoviesContext } from "../../contexts/moviesContext";

const RemoveFromFavoritesIcon = ({ movie }) => {
    const context = useContext(MoviesContext);

    const handleAddToPlaylistIcon = (e) => {
        e.preventDefault();
        context.removeFromFavorites(movie);
    };
    return (
        <IconButton
            aria-label="remove from favorites"
            onClick={handleAddToPlaylistIcon}
        >
            <DeleteIcon color="primary" fontSize="large" />
        </IconButton>
    );
};

export default RemoveFromFavoritesIcon;;
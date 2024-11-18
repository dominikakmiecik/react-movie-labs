import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
    const [favorites, setFavorites] = useState([])
    const [myReviews, setMyReviews] = useState({})
    const [watchList, setWatchList] = useState([]);

    const addToFavorites = (movie) => {
        let newFavorites = [];
        if (!favorites.includes(movie.id)) {
            newFavorites = [...favorites, movie.id];
        }
        else {
            newFavorites = [...favorites];
        }
        setFavorites(newFavorites)
    };
    const addToWatchList = (movie) => {
        let newWatchList = [];
        if (!watchList.includes(movie.id)) {
            const newWatchList = [...watchList, movie.id];
            setWatchList(newWatchList);
            console.log("Must Watch list updated:", newWatchList); // Log for testing
        }
        else {
            newWatchList = [...watchList];
        }
        setWatchList(newWatchList)
    };

    
    // We will use this function in the next step
    const removeFromFavorites = (movie) => {
        setFavorites(favorites.filter(
            (mId) => mId !== movie.id
        ))
    };
    const addReview = (movie, review) => {
        setMyReviews({ ...myReviews, [movie.id]: review })
    };

   
   
   
    //console.log(myReviews);
    return (
        <MoviesContext.Provider
            value={{
                favorites,
                addToFavorites,
                removeFromFavorites,
                addReview,
                addToWatchList,
            }}
        >
            {props.children}
        </MoviesContext.Provider>
    );

}

export default MoviesContextProvider;
import React, { useEffect, useState } from "react";
export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
    const [favorites, setFavorites] = useState([])
    const [myReviews, setMyReviews] = useState({})
    const [watchList, setWatchList] = useState([])
    const [darkMode, setDarkMode] = useState(false)
    const [cast, setCast] = useState([]);

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark-mode");
        }
        else {
            document.body.classList.remove("dark-mode");
        }
    }, [darkMode]);

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
            newWatchList = [...watchList, movie.id];
            setWatchList(newWatchList);
            console.log("Must Watch list updated:", newWatchList); // Log for testing
        }
        else {
            newWatchList= [...watchList];

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

    const toggleDarkMode = () => {
        setDarkMode(prevMode => !prevMode)
    };
    const setMovieCast = (castData) => {
        setCast(castData);
    };


   
    console.log("Current WatchList in Provider:", watchList);

   
    return (
        <MoviesContext.Provider
            value={{
                favorites,
                addToFavorites,
                removeFromFavorites,
                addReview,
                watchList,
                addToWatchList,
                toggleDarkMode,
                darkMode,
                setMovieCast,
                cast,

              
            }}
        >
            {props.children}
        </MoviesContext.Provider>
    );
}

export default MoviesContextProvider;
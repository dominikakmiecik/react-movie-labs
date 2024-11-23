import { useEffect, useState } from "react";
import { getCredits } from '../api/tmdb-api'

const useMovie = id => {
    const [cast, setCast] = useState(null);
    useEffect(() => {
        getCredits({ queryKey: ["credits," , {id}] }).then(credits => {
            setCast(credits?.cast || []);
        });
    }, [id]);
    return [cast, setCast];
};

export default useMovie;
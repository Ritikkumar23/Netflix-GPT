import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTopRated = () => {
    const dispatch = useDispatch();
    const topRated = useSelector((store) => store.movies.TopRated);

    useEffect(() => {
        const getTopRatedMovies = async () => {
            try {
                const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS);
                const json = await data.json();
                dispatch(addTopRatedMovies(json.results));
            } catch (error) {
                console.error("Error fetching top-rated movies:", error);
            }
        };

        if (!topRated || topRated.length === 0) {
            getTopRatedMovies();
        }
    }, [topRated, dispatch]);

    return topRated;
};

export default useTopRated;

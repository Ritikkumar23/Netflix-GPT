import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
    const dispatch = useDispatch();
    const popularMovies = useSelector((store) => store.movies.popularMovies);

    useEffect(() => {
        const getPopularMovies = async () => {
            try {
                const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS);
                const json = await data.json();
                dispatch(addPopularMovies(json.results));
            } catch (error) {
                console.error("Error fetching popular movies:", error);
            }
        };

        if (!popularMovies || popularMovies.length === 0) {
            getPopularMovies();
        }
    }, [popularMovies, dispatch]);

    return popularMovies;
};

export default usePopularMovies;

import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect, useMemo } from "react";

const usePopularMovies = () => {
    const dispatch = useDispatch();
    const PopularMovies = useSelector((store) => store.movies.PopularMovies)
    const getPopularMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
            API_OPTIONS
        );
        const json = await data.json();


        dispatch(addPopularMovies(json.results));
    };
    useEffect(() => {
        if (!PopularMovies) {
            getPopularMovies();
        }
    }, [PopularMovies, dispatch]);
    return PopularMovies;
}
export default usePopularMovies;
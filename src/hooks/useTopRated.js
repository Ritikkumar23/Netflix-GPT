import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useEffect, useMemo } from "react";

const useTopRated = () => {
    const dispatch = useDispatch();
    const TopRated=useSelector((store)=>store.movies.TopRated)

    const getTopRatedMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
            API_OPTIONS
        );
        const json = await data.json();
        

        dispatch(addTopRatedMovies(json.results));
    };
    useEffect(() => {
        if (!TopRated) {
            getTopRatedMovies();
        }
    }, [TopRated, dispatch]);
    return TopRated;
}
export default useTopRated;
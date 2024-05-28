import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    const upcoming = useSelector((store) => store.movies.Upcoming);

    useEffect(() => {
        const getUpcomingMovies = async () => {
            try {
                const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS);
                const json = await data.json();
                dispatch(addUpcomingMovies(json.results));
            } catch (error) {
                console.error("Error fetching upcoming movies:", error);
            }
        };

        if (!upcoming || upcoming.length === 0) {
            getUpcomingMovies();
        }
    }, [upcoming, dispatch]);

    return upcoming;
}

export default useUpcomingMovies;

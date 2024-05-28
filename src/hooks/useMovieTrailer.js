import { useEffect, useMemo } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useDispatch, useSelector } from "react-redux";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
    const trailerVideo = useSelector((store) => store.movies.trailerVideo);

    useEffect(() => {
        const getMovieVideos = async () => {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
                const json = await response.json();

                if (json && json.results && Array.isArray(json.results)) {
                    
                    const trailer = json.results.find(video => video.type === "Trailer") || json.results[0];
                    dispatch(addTrailerVideo(trailer));
                }
            } catch (error) {
                console.error("Error fetching movie videos:", error);
            }
        };

        if (!trailerVideo || trailerVideo.id !== movieId) {
            getMovieVideos();
        }
    }, [movieId, trailerVideo, dispatch]);

    return useMemo(() => trailerVideo, [trailerVideo]);
};

export default useMovieTrailer;

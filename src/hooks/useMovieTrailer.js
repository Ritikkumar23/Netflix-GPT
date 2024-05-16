import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";


const useMovieTrailer = (movieId) => {
const dispatch=useDispatch();
    const getMovieVideos = async () => {
        try {
            const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US", API_OPTIONS);
            const json = await data.json();
            

            if (json && json.results && Array.isArray(json.results)) {
                // Filter trailers or use the first video if no trailer found
                const trailer = json.results.find(video => video.type === "Trailer") || json.results[0];
                dispatch(addTrailerVideo(trailer));
            }
        } catch (error) {
            console.error("Error fetching movie videos:", error);
        }
    }
    useEffect(() => {
        getMovieVideos();
    }, [])


}

export default useMovieTrailer;

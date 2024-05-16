import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
import moviesReducer from './moviesSlice';

const appStore = configureStore({
    reducer: {
        user: UserSlice,
        movies: moviesReducer,
    }
})

export default appStore;
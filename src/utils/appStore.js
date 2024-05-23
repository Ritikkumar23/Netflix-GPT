import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
import moviesReducer from './moviesSlice';
import gptReducer from './gptSlice';
import configReducer from './configSlice';
const appStore = configureStore({
    reducer: {
        user: UserSlice,
        movies: moviesReducer,
        gpt:gptReducer,
        config:configReducer,
    }
})

export default appStore;
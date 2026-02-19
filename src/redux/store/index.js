import { configureStore, combineReducers } from "@reduxjs/toolkit";
import favouritesReducer from "../reducers/favouritesReducer";
import searchReducer from "../reducers/searchReducer";

const bigReducer = combineReducers({
    favourites: favouritesReducer,
    search: searchReducer,
});

const store = configureStore({
    reducer: bigReducer,
})

export default store;
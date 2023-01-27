import { createSlice } from "@reduxjs/toolkit";
import { getResults } from "../../api/redditApi";


export const searchBarSlice = createSlice({
    name: "searchBar",
    initialState: {
        searchQuery: "",
        searchResults: [],
        isLoadingResults: false,
        hasError: false
    },
    reducers: {
        startGetResults(state){
            state.isLoadingResults = true;
            state.hasError = false;
        },
        getResultsSuccess(state, action){
            state.isLoadingResults = false;
            state.hasError = false;
            state.searchResults = action.payload
        },
        getResultsFailed(state){
            state.isLoadingResults = false;
            state.hasError = true;
        },
        changeSearchQuery(state, action){
            state.searchQuery = action.payload;
        }
    }
})

export const { startGetResults, getResultsSuccess, getResultsFailed, changeSearchQuery } = searchBarSlice.actions;

export const selectSearchQuery = (state) => state.searchBar.searchQuery;
export const selectSearchResults = (state) => state.searchBar.searchResults;
export const isLoadingSearchResults = (state) => state.searchBar.isLoadingResults;

export default searchBarSlice.reducer;


// thunk for fetching search results
export const fetchResults = (searchQuery) => async (dispatch) => {
try {
    dispatch(startGetResults());
    const searchResultsList = await getResults(searchQuery);
    dispatch(getResultsSuccess(searchResultsList));
} catch (error) {
    dispatch(getResultsFailed())
}}
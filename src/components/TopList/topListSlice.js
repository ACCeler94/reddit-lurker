import { createSlice } from "@reduxjs/toolkit";
import { getTopSubreddits } from "../../api/redditApi";

// createSlice for topList

export const topListSlice = createSlice({
    name: "topList",
    initialState: {
        topListElements: [],
        hasError: false,
        isLoadingTopList: false,
    },    
    reducers: {
        startGetTopSubreddits(state) {
        state.isLoadingTopList = true;
        state.hasError = false;
    },    
        getTopSubredditsSuccess(state, action) {
        state.isLoadingTopList = false;
        state.hasError = false;
        state.topListElements = action.payload;
    },  
        getTopSubredditsFailed(state) {
        state.isLoadingTopList = false;
        state.hasError = true;
    }}
})    

export const { startGetTopSubreddits, 
    getTopSubredditsSuccess, 
    getTopSubredditsFailed} = topListSlice.actions

export const fetchTopList = () => async (dispatch) => {
    try {
        dispatch(startGetTopSubreddits());
        const topListElements = await getTopSubreddits();
        dispatch(getTopSubredditsSuccess(topListElements))
    } catch (error) {
        dispatch(getTopSubredditsFailed())
    }}


export const selectTopList = (state) => state.topList.topListElements;
export const isLoadingTopList = (state) => state.topList.isLoadingTopList;

export default topListSlice.reducer;


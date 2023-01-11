import { createSlice } from "@reduxjs/toolkit";
import { getPosts } from "../../api/redditApi";

export const postsSlice = createSlice({
    name: "posts",
    initialState: {
        selectedSubreddit: "valheim",
        hasError: false,
        isLoadingPosts: false,
        posts: []
    },
    reducers: {
        startGetPosts(state){
            state.isLoadingPosts = true;
            state.hasError = false;
        },
        getPostsSuccess(state, action){
            state.isLoadingPosts = false;
            state.hasError = false;
            state.posts = action.payload;
        },
        getPostsFailed(state){
            state.isLoadingPosts = false;
            state.hasError = true;
        }
    }
})

export const { startGetPosts, getPostsSuccess, getPostsFailed } = postsSlice.actions


// thunk for fetching posts
export const fetchPosts = (selectedSubreddit) => async (dispatch) => {
    try {
        dispatch(startGetPosts());
        const postsList = await getPosts(selectedSubreddit);
        dispatch(getPostsSuccess(postsList))
    } catch (error) {
        dispatch(getPostsFailed())
    }}

    

export const selectSelectedSubreddit = (state) => state.posts.selectedSubreddit;    
export const selectPosts = (state) => state.posts.posts;
export const isLoadingPosts = (state) => state.posts.isLoadingPosts;

export default postsSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";
import { getMorePosts, getPosts } from "../../api/redditApi";

export const postsSlice = createSlice({
    name: "posts",
    initialState: {
        selectedSubreddit: "worldnews",
        hasError: false,
        isLoadingPosts: false,
        posts: [],
        selectedPostData: {},
        showPostWithComments: false,
        isLoadingMorePosts: false
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
        },
        selectSubreddit(state, action){
            state.selectedSubreddit = action.payload;
            state.showPostWithComments = false;
        },
        selectPost(state, action){
            state.selectedPostData = action.payload;
        },
        startGetMorePosts(state){
            state.isLoadingMorePosts = true;
            state.hasError = false;
        },
        getMorePostsSuccess(state, action){
            state.isLoadingMorePosts = false;
            state.hasError = false;
            state.posts = [...state.posts, ...action.payload]
        },
        getMorePostsFailed(state){
            state.isLoadingMorePosts = false;
            state.hasError = true;
        }
    }
})

export const { startGetPosts, getPostsSuccess, getPostsFailed, selectSubreddit, selectPost, startGetMorePosts, getMorePostsSuccess, getMorePostsFailed } = postsSlice.actions


export const selectSelectedSubreddit = (state) => state.posts.selectedSubreddit;    
export const selectPosts = (state) => state.posts.posts;
export const isLoadingPosts = (state) => state.posts.isLoadingPosts;
export const selectSelectedPost = (state) => state.posts.selectedPostData;
export const showPostWithComments = (state) => state.posts.showPostWithComments;
export const isLoadingMorePosts = (state) => state.posts.isLoadingMorePosts;

export default postsSlice.reducer;


// thunk for fetching posts
export const fetchPosts = (selectedSubreddit) => async (dispatch) => {
    try {
        dispatch(startGetPosts());
        const postsList = await getPosts(selectedSubreddit);
        dispatch(getPostsSuccess(postsList))
    } catch (error) {
        dispatch(getPostsFailed())
    }}

    // thunk for fetching more posts from selected subreddit
    export const fetchMorePosts = (selectedSubreddit, lastPostId) => async (dispatch) => {
        try {
            dispatch(startGetMorePosts());
            const postsList = await getMorePosts(selectedSubreddit, lastPostId);
            dispatch(getMorePostsSuccess(postsList))
        } catch (error) {
            dispatch(getMorePostsFailed())
        }}
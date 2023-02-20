import { createSlice } from "@reduxjs/toolkit";
import { getComments, getPostData } from "../../api/redditApi";
import { selectPost } from "../Posts/postsSlice";

export const postWithCommentsSlice = createSlice({
    name: "postWithComments",
    initialState: {
        comments: [],
        hasError: false,
        isLoadingComments: false,
        isLoadingPost: false
    },
    reducers: {
        startGetComments(state){
            state.isLoadingComments = true;
            state.hasError = false;
        },
        getCommentsSuccess(state, action){
            state.isLoadingComments = false;
            state.hasError = false;
            state.comments = action.payload;
        },
        getCommentsFailed(state){
            state.isLoadingComments = false;
            state.hasError = true;
        },
        startGetPost(state){
            state.isLoadingPost = true;
            state.hasError = false;
        },
        getPostSuccess(state){
            state.isLoadingPost = false;
            state.hasError = false;
        },
        getPostFailed(state){
            state.isLoadingPost = false;
            state.hasError = true;
        }
    }
})

export const { startGetComments, getCommentsSuccess, getCommentsFailed, getPostFailed, getPostSuccess, startGetPost } = postWithCommentsSlice.actions;

export const selectComments = (state) => state.postWithComments.comments;
export const isLoadingComments = (state) => state.postWithComments.isLoadingComments;
export const isLoadingPost = (state) => state.postWithComments.isLoadingPost;
export const postWithCommentsError = (state) => state.postWithComments.hasError;

export default postWithCommentsSlice.reducer;


// thunk for fetching posts
export const fetchComments = (permalink) => async (dispatch) => {
    try {
        dispatch(startGetComments());
        const commentsList = await getComments(permalink);
        dispatch(getCommentsSuccess(commentsList))
    } catch (error) {
        dispatch(getCommentsFailed())
    }}

 // thunk for fetching post data after refresh or selecting post using params. I decided to not use redux persistent state - if a user wants to refresh then let the refresh happen
    export const fetchPostData = (currentLocation) => async (dispatch) => {
        try {
            dispatch(startGetPost());
            const postDataObject = await getPostData(currentLocation);
            dispatch(selectPost(postDataObject))
            dispatch(getPostSuccess())
        } catch (error) {
            dispatch(getPostFailed())
        }}

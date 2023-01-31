import { createSlice } from "@reduxjs/toolkit";
import { getComments } from "../../api/redditApi";

export const postWithCommentsSlice = createSlice({
    name: "postWithComments",
    initialState: {
        comments: [],
        hasError: false,
        isLoadingComments: false
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
    }
})

export const { startGetComments, getCommentsSuccess, getCommentsFailed } = postWithCommentsSlice.actions;

export const selectComments = (state) => state.postWithComments.comments;
export const isLoadingComments = (state) => state.postWithComments.isLoadingComments;

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


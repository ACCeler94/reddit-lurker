import { configureStore } from '@reduxjs/toolkit';
import topListReducer from '../features/TopList/topListSlice';
import postsReducer from '../features/Posts/postsSlice'
import postWithCommentsReducer  from '../features/PostWithComments/postWithCommentsSlice';


export const store = configureStore({
  reducer: {
    topList: topListReducer,
    posts: postsReducer,
    postWithComments: postWithCommentsReducer
  }
});


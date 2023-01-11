import { configureStore } from '@reduxjs/toolkit';
import topListReducer from '../features/TopList/topListSlice';
import postsReducer from '../features/Posts/postsSlice'

export const store = configureStore({
  reducer: {
    topList: topListReducer,
    posts: postsReducer
  }
});


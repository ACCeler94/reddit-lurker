import { configureStore } from '@reduxjs/toolkit';
import topListReducer from '../features/TopList/topListSlice';
import postsReducer from '../features/Posts/postsSlice'
import postWithCommentsReducer  from '../features/PostWithComments/postWithCommentsSlice';
import searchBarReducer from '../features/SearchBar/searchBarSlice'


export const store = configureStore({
  reducer: {
    topList: topListReducer,
    posts: postsReducer,
    postWithComments: postWithCommentsReducer,
    searchBar: searchBarReducer,
  }
});


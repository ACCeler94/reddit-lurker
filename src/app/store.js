import { configureStore } from '@reduxjs/toolkit';
import topListReducer from '../components/TopList/topListSlice';
import postsReducer from '../components/Posts/postsSlice'
import postWithCommentsReducer  from '../components/PostWithComments/postWithCommentsSlice';
import searchBarReducer from '../components/SearchBar/searchBarSlice'


export const store = configureStore({
  reducer: {
    topList: topListReducer,
    posts: postsReducer,
    postWithComments: postWithCommentsReducer,
    searchBar: searchBarReducer,
  }
});


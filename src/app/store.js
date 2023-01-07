import { configureStore } from '@reduxjs/toolkit';
import topListReducer from '../features/TopList/topListSlice';

export const store = configureStore({
  reducer: {
    topList: topListReducer
  }
});


import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom';
import { PostWithComments } from './components/PostWithComments/PostWithComments';
import { Posts } from './components/Posts/Posts';
import { LoadMoreButton } from './components/LoadMoreButton/LoadMoreButton';

const container = document.getElementById('root');
const root = createRoot(container);



const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={ <App />}>
    <Route index element={ (
    <>
    <Posts />
    <LoadMoreButton />
    </>
    ) } />
    <Route path='/:subreddit/:key' element={<PostWithComments />} />
    <Route path='/:subreddit' element={(
        <>
        <Posts />
        <LoadMoreButton />
        </>
      )} />
  </Route>
))


root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


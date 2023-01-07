import React from 'react';
import './App.css';
import { Header } from "./features/Header/Header";
import { Post } from './features/Post/Post';
import {TopList} from './features/TopList/TopList';

function App() {

  return (
    <>
      <Header />
      <main>
        <Post />
        <Post />
      </main>
      <aside>
        <TopList />
      </aside>
    </>
  );
}

export default App;

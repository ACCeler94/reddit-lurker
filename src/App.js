import React from 'react';
import './App.css';
import { Header } from "./features/Header/Header";
import { TopList } from './features/TopList/TopList';
import { Posts } from './features/Posts/Posts';

function App() {

  return (
    <>
      <Header />
      <main>
        <Posts />
      </main>
      <aside>
        <TopList />
      </aside>
    </>
  );
}

export default App;

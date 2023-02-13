import React from 'react';
import './App.css';
import { Header } from "./components/Header/Header";
import { TopList } from './components/TopList/TopList';
import { Posts } from './components/Posts/Posts';
import { LoadMoreButton } from './components/LoadMoreButton/LoadMoreButton';
import { Outlet } from 'react-router-dom';




function App() {


  return (
    <>
      <Header />
      <main>
      <Outlet />
      </main>
      <aside>
        <TopList />
      </aside>
    </>
  );
}

export default App;

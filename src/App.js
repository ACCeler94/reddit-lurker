import React from 'react';
import './App.css';
import { Header } from "./features/Header/Header";
import { TopList } from './features/TopList/TopList';
import { Posts } from './features/Posts/Posts';
import { LoadMoreButton } from './components/LoadMoreButton/LoadMoreButton';
import { SearchResults } from './components/SearchResults/SearchResults';



function App() {


  return (
    <>
      <Header />
     
      <main>
        <Posts />
        <LoadMoreButton />
      </main>
      <aside>
        <TopList />
      </aside>
    </>
  );
}

export default App;

import React from 'react';
import './App.css';
import { Header } from "./components/Header/Header";
import { TopList } from './components/TopList/TopList';
import { Outlet } from 'react-router-dom';
import { useScreenWidth } from './helpers/useScreenWidth';





function App() {

  const {width} = useScreenWidth();

  if(width <= 1024){
    return (
      <>
      <Header />
      <main>
      <Outlet />
      </main>
      <aside id="mobile-side-nav-bar" >
        <TopList />
      </aside>
    </>
    )
  }

  return (
    <>
      <Header />
      <main>
      <Outlet />
      </main>
      <aside id="side-nav-bar" style={{visibility: "visible", opacity: 1 }} >
        <TopList />
      </aside>
    </>
  );
}

export default App;

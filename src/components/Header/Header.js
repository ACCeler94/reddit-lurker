import React from "react";
import './Header.css';
import logo from "./logo.png";
import { SearchBar } from "../SearchBar/SearchBar";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { defaultSubreddit, selectSubreddit } from "../Posts/postsSlice";
import { RxHamburgerMenu } from "react-icons/rx"
import { useScreenWidth } from "../../helpers/useScreenWidth";


export function Header() {

    const dispatch = useDispatch()
    const { width } = useScreenWidth()

    const hamburgerClickHandler = () => {
        const sideNavBar = document.getElementById("mobile-side-nav-bar")
        sideNavBar.style.visibility = "visible"
        sideNavBar.style.opacity = 1
    }

    // render theme toggle in header depending on screen size
    if(width < 768){

    return (
        <header>
            <RxHamburgerMenu id="hamburger-icon" onClick={hamburgerClickHandler} />
            <Link to={'/'} id="title-logo" onClick={() => dispatch(selectSubreddit(defaultSubreddit))}>
                <img src={logo} alt="reddit lurker logo" />
                <p>Reddit Lurker</p>
            </Link>
            <SearchBar />
        </header>
    )}
   
        
    return (
            <header>
            <RxHamburgerMenu id="hamburger-icon" onClick={hamburgerClickHandler}/>
            <Link to={'/'} id="title-logo" onClick={() => dispatch(selectSubreddit(defaultSubreddit))}>
                <img src={logo} alt="reddit lurker logo" />
                <p>Reddit Lurker</p>
            </Link>
            <SearchBar />
            <ThemeToggle />
        </header>
        )
    
}
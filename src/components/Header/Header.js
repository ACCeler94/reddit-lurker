import React from "react";
import './Header.css';
import logo from "./logo.png";
import { SearchBar } from "../SearchBar/SearchBar";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { defaultSubreddit, selectSubreddit } from "../Posts/postsSlice";

export function Header() {

    const dispatch = useDispatch()

    return (
        <header>
            <Link to={'/'} id="title-logo" onClick={() => dispatch(selectSubreddit(defaultSubreddit))}>
                <img src={logo} alt="reddit lurker logo" />
                <p>Reddit Lurker</p>
            </Link>
            <SearchBar />
            <ThemeToggle />
        </header>
    )
}
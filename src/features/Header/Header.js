import React from "react";
import './Header.css';
import logo from "./logo.png";
import { SearchBar } from "../SearchBar/SearchBar";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";

export function Header() {
    return (
        <header>
            <div id="title-logo">
                <img src={logo} alt="reddit lurker logo" />
                <p>Reddit Lurker</p>
            </div>
            <SearchBar />
            <ThemeToggle />
        </header>
    )
}
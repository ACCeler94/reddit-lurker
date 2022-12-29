import React from 'react';
import './SearchBar.css';

export function SearchBar() {

    return (
        <form action='' className='search-bar'>
                <input type='text' name='search' id='search' placeholder='Search Subreddits...' />
        </form>
    )
}
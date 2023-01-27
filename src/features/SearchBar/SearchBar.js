import React from 'react';
import { SearchResults } from '../../components/SearchResults/SearchResults';
import './SearchBar.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeSearchQuery, fetchResults, selectSearchQuery } from './searchBarSlice';

export function SearchBar() {
    
    const dispatch = useDispatch();
    const searchQuery = useSelector(selectSearchQuery)

    // input change handler
    const inputChangeHandler = (event) => {
        if(event.target.value.length >= 3){ // minimum char. value to avoid excessive failed requests
        dispatch(changeSearchQuery(event.target.value))
        dispatch(fetchResults(searchQuery))
        }
    }


    return (
        <div className='search'>
            <form action='' className='search-bar'>
                    <input type='text' name='search-input' id='search-input' placeholder='Search for Subreddits... (min. 3 char.)' autoComplete='off' onChange={inputChangeHandler} />
                    <SearchResults />
            </form> 
            
        </div>
    )
}

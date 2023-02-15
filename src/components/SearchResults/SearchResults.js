import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideSearchResults, isShowingSearchResults, selectSearchResults } from "../SearchBar/searchBarSlice";
import "./SearchResults.css"
import { selectSubreddit } from "../Posts/postsSlice";
import { Link } from "react-router-dom";

export function SearchResults() {
    const dispatch = useDispatch();
    const results = useSelector(selectSearchResults);
    const isShowingResults = useSelector(isShowingSearchResults)


    const resultClickHandler = (subName) =>{
        dispatch(selectSubreddit(subName))
        dispatch(hideSearchResults())
        }


    // hook for hiding search results when clicked outside
    const ref = useRef(null)

    useEffect( () => {
        const handleClickOutside = (e) => {
            if(ref.current && isShowingResults &&!ref.current.contains(e.target)){
                dispatch(hideSearchResults())
              }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
          };
    },[ref])

    const nsfwIndicator = (
        <span className="nsfw-indicator">NSFW</span>
    )


    return (
        <div className="search-results" id="search-results" ref={ref}  >
            <div className="search-results-list-wrapper">
                <ul className="results-list">
                    {results.slice(0,9).map(element => {
                        const subInfo = element;
                        return (
                            <Link to={`r/${element.display_name}`} >
                                <li className="subreddit-result" key={subInfo.name} id={subInfo.display_name} onClick={()=> {resultClickHandler(subInfo.display_name)}}>
                                    <div className="sub-info">
                                        <img src={subInfo.icon_img || "https://styles.redditmedia.com/t5_2u0xf/styles/communityIcon_2mfivuevv58a1.png?width=256&s=e108747628c6581f50cbd9514fb45f2e61826f51" } alt="subreddit-icon" className="result-sub-icon" />
                                        <h4 className="sub-name">{subInfo.display_name}</h4>
                                        { subInfo.over18 && nsfwIndicator }
                                    </div>
                                    <p className="short-description">{subInfo.title}</p>
                                </li>
                            </Link>
                    
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

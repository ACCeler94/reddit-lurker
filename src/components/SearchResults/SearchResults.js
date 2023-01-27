import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSearchResults } from "../../features/SearchBar/searchBarSlice";
import "./SearchResults.css"
import { selectSelectedSubreddit, selectSubreddit } from "../../features/Posts/postsSlice";

export function SearchResults() {
    const dispatch = useDispatch();
    const results = useSelector(selectSearchResults);
    const selectedSubreddit = useSelector(selectSelectedSubreddit)

    const resultClickHandler = (event) =>{
        if(event.target.id !== selectedSubreddit){
        console.log(event.target.id)
        }
    }

    return (
        <div className="search-results">
            <div className="search-results-list-wrapper">
                <ul className="results-list">
                    {results.slice(0,9).map(element => {
                        const subInfo = element;
                        return (
                            <li className="subreddit-result" key={subInfo.name} id={subInfo.display_name} onClick={resultClickHandler}>
                                <div className="sub-info">
                                    <img src={subInfo.icon_img || "https://styles.redditmedia.com/t5_2u0xf/styles/communityIcon_2mfivuevv58a1.png?width=256&s=e108747628c6581f50cbd9514fb45f2e61826f51" } alt="subreddit-icon" className="result-sub-icon" />
                                    <h4 className="sub-name">{subInfo.display_name}</h4>
                                </div>
                                <p className="short-description">{subInfo.title}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}
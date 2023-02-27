import React, { useEffect } from "react";
import { selectTopList, isLoadingTopList, fetchTopList, topListError } from "./topListSlice";
import { useDispatch, useSelector} from "react-redux";
import { Loader } from "../Loader/Loader";
import './TopList.css'
import { selectSubreddit} from "../Posts/postsSlice";
import { NavLink } from "react-router-dom";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";
import { useScreenWidth } from "../../helpers/useScreenWidth";
import { MdClose } from "react-icons/md"


export function TopList() {
    const dispatch = useDispatch();
    const topList = useSelector(selectTopList);
    const isLoading = useSelector(isLoadingTopList);
    const hasError = useSelector(topListError);
    const {width} = useScreenWidth();



    useEffect(() => {
        dispatch(fetchTopList());
      }, [dispatch]);
    

    // event handler on X icon to close side bar on mobile
    const closeSideBar = () =>{
      const sideNavBar = document.getElementById("mobile-side-nav-bar")
      sideNavBar.style.visibility = "hidden"
      sideNavBar.style.opacity = 0
    }


    if(hasError){
        return (
            <div className='side-bar'>
                < MdClose id="side-bar-close-icon" onClick={closeSideBar} />
                <h3>Top Subreddits</h3>
                <div className="error-wrapper">
                    <h4>Failed to load Top Subreddits</h4>
                    <button className="top-list-button" onClick={()=>dispatch(fetchTopList())}><span>Try again</span></button>
                </div>
            </div>
            )
    }


    if(isLoading){
        return ( 
        <div className='side-bar'>
            < MdClose id="side-bar-close-icon" onClick={closeSideBar} />
            <h3>Top Subreddits</h3>
            <Loader />
        </div>)
    }


    // change handler for selecting subreddits
    const topListClickHandler = (event) => {
       dispatch(selectSubreddit(event.target.id))
    }   

    // add theme toggle to the side bar for mobile, if done with media queries - toggles would be out of sync
    if(width < 768){
        return (
            <div className='side-bar'>
                <ThemeToggle />
                < MdClose id="side-bar-close-icon" onClick={closeSideBar} />
                <h3>Top Subreddits</h3>
                <ul className="subreddit-list">
                    {topList.slice(0, 8).map(element => {
                        return (
                        <NavLink to={`r/${element.display_name}`} key={element.id}  >
                            <li 
                                id={element.display_name} 
                                onClick={topListClickHandler} >
                                    <img src={element.icon_img || "https://styles.redditmedia.com/t5_2u0xf/styles/communityIcon_2mfivuevv58a1.png?width=256&s=e108747628c6581f50cbd9514fb45f2e61826f51" } alt="subreddit-icon" className="subreddit-icon" />
                                    {element.display_name}
                            </li>
                        </NavLink>
                    )})}
                </ul>
            </div>
        )
    }
    


    return (
        <div className='side-bar'>
            < MdClose id="side-bar-close-icon" onClick={closeSideBar} />
            <h3>Top Subreddits</h3>
            <ul className="subreddit-list">
                {topList.slice(0, 8).map(element => {
                    return (
                    <NavLink to={`r/${element.display_name}`} key={element.id}>
                        <li 
                            id={element.display_name} 
                            onClick={topListClickHandler} >
                                <img src={element.icon_img || "https://styles.redditmedia.com/t5_2u0xf/styles/communityIcon_2mfivuevv58a1.png?width=256&s=e108747628c6581f50cbd9514fb45f2e61826f51" } alt="subreddit-icon" className="subreddit-icon" />
                                {element.display_name}
                        </li>
                    </NavLink>
                )})}
            </ul>
        </div>
    )
}
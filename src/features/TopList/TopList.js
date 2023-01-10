import React, { useEffect } from "react";
import { selectTopList, isLoadingTopList, fetchTopList } from "./topListSlice";
import { useDispatch, useSelector} from "react-redux";
import { Loader } from "../../components/Loader/Loader";
import './TopList.css'


export function TopList() {
    const dispatch = useDispatch();
    const topList = useSelector(selectTopList)
    const isLoading = useSelector(isLoadingTopList)

    useEffect(() => {
        dispatch(fetchTopList());
      }, [dispatch]);
    
    
    if(isLoading){
        return ( 
        <div className='side-bar'>
            <h3>Top Subreddits</h3>
            <Loader />
        </div>)
    }


    return (
        <div className='side-bar'>
            <h3>Top Subreddits</h3>
            <ul className="subreddit-list">
                {topList.slice(0, 8).map(element => {
                    return (
                    <li key={element.id} ><img src={element.icon_img || "https://styles.redditmedia.com/t5_2u0xf/styles/communityIcon_2mfivuevv58a1.png?width=256&s=e108747628c6581f50cbd9514fb45f2e61826f51" } alt="subreddit-icon" id="subreddit-icon" />{element.display_name} </li>
                )})}
            </ul>
        </div>
    )
}
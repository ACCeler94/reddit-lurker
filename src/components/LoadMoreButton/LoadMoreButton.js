import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchMorePosts, isLoadingMorePosts, selectPosts, selectSelectedSubreddit } from "../Posts/postsSlice";
import "./LoadMoreButton.css"
import { Loader } from "../Loader/Loader";


export function LoadMoreButton() {

    const dispatch = useDispatch();
    const selectedSubreddit = useSelector(selectSelectedSubreddit)
    const posts = useSelector(selectPosts)
    const isLoadingMore = useSelector(isLoadingMorePosts)
  
    const loadMorePostsClickHandler = () =>{
      const lastPostName = posts[posts.length -1].name
      dispatch(fetchMorePosts(selectedSubreddit, lastPostName))
    }
  

    if(isLoadingMore){
        return (
            <div className="posts-loader" style={{margin: "auto"}}>
            <h3 style={{margin: "5% auto", textAlign: "center"}}>Loading Posts...</h3>
            <Loader />
            </div>
        )
    }


    return (
        <div className="button-container">
            <button className="load-more-button" onClick={loadMorePostsClickHandler} ><span>Load more...</span></button>
        </div>
    )

}


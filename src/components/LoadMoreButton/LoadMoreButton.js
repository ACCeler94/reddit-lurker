import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchMorePosts, isLoadingMorePosts, postsError, selectPosts, selectSelectedSubreddit } from "../Posts/postsSlice";
import "./LoadMoreButton.css"
import { Loader } from "../Loader/Loader";


export function LoadMoreButton() {

    const dispatch = useDispatch();
    const selectedSubreddit = useSelector(selectSelectedSubreddit)
    const posts = useSelector(selectPosts)
    const isLoadingMore = useSelector(isLoadingMorePosts)
    const hasError = useSelector(postsError)
  
    const loadMorePostsClickHandler = () =>{
      const lastPostName = posts[posts.length -1].name
      dispatch(fetchMorePosts(selectedSubreddit, lastPostName))
    }

    if(hasError){
        return
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


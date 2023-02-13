import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../Loader/Loader";
import { Post } from "../Post/Post";
import { PostWithComments } from "../PostWithComments/PostWithComments";
import { fetchPosts, isLoadingPosts, selectPosts, selectSelectedSubreddit, selectSelectedPost, showPostWithComments } from "./postsSlice";
import "./Posts.css"
import { Link, useParams } from "react-router-dom";

export function Posts() {
    const dispatch = useDispatch();
    const postsList = useSelector(selectPosts);
    const isLoading = useSelector(isLoadingPosts);
    const selectedSubreddit = useSelector(selectSelectedSubreddit);
    const clickedPost = useSelector(selectSelectedPost)
    const showOnlyPostWithComments = useSelector(showPostWithComments)
    const params = useParams()

    useEffect(() => {
        dispatch(fetchPosts(selectedSubreddit))
    }, [dispatch, selectedSubreddit,params])

    if(isLoading){
        return (
            <div className="posts-loader">
            <h3>Loading Posts...</h3>
            <Loader />
            </div>
        )
    }

    if(showOnlyPostWithComments){
        return (
            <PostWithComments postData = {clickedPost}/>
        )
    }

    return postsList.map( element => {
        return (
            <Post postData={element} key={element.name} />
        )
    }
    
    )

}
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../../components/Loader/Loader";
import { Post } from "../../components/Post/Post";
import { PostWithComments } from "../PostWithComments/PostWithComments";
import { fetchPosts, isLoadingPosts, selectPosts, selectSelectedSubreddit, selectSelectedPost, showPostWithComments } from "./postsSlice";

export function Posts() {
    const dispatch = useDispatch();
    const postsList = useSelector(selectPosts);
    const isLoading = useSelector(isLoadingPosts);
    const selectedSubreddit = useSelector(selectSelectedSubreddit);
    const clickedPost = useSelector(selectSelectedPost)
    const showOnlyPostWithComments = useSelector(showPostWithComments)

    useEffect(() => {
        dispatch(fetchPosts(selectedSubreddit))
    }, [dispatch, selectedSubreddit])

    if(isLoading){
        return (
            <div className="posts-loader" style={{margin: "auto"}}>
            <h3 style={{margin: "5% auto", textAlign: "center"}}>Loading Posts...</h3>
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
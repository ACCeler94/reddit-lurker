import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../../components/Loader/Loader";
import { Post } from "../../components/Post/Post";
import { fetchPosts, isLoadingPosts, selectPosts, selectSelectedSubreddit } from "./postsSlice";

export function Posts() {
    const dispatch = useDispatch();
    const postsList = useSelector(selectPosts);
    const isLoading = useSelector(isLoadingPosts);
    const selectedSubreddit = useSelector(selectSelectedSubreddit);

    useEffect(() => {
        dispatch(fetchPosts(selectedSubreddit))
    }, [dispatch])

    if(isLoading){
        return (
            <div className="posts-loader" style={{margin: "auto"}}>
            <h3 style={{margin: "5% auto", textAlign: "center"}}>Loading Posts...</h3>
            <Loader />
            </div>
        )
    }

    return postsList.map( element =>{
        return (
            <Post postData={element} key={element.id} />
        )
    })

}
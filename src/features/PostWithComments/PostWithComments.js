import React from "react";
import { Post } from "../../components/Post/Post";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchComments, isLoadingComments, selectComments } from "./postWithCommentsSlice";
import { selectSelectedPost } from "../Posts/postsSlice";
import { Loader } from "../../components/Loader/Loader";
import "./PostWithComments.css"
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export function PostWithComments(props) {
    
    const dispatch = useDispatch();
    const commentsList = useSelector(selectComments);
    const loadingComments = useSelector(isLoadingComments);
    const selectedPost = useSelector(selectSelectedPost)
    const permalink = selectedPost.permalink

    useEffect(() => {
        dispatch(fetchComments(permalink));
      }, [permalink]);


      if(loadingComments){
        return (
            <>
                <Post postData = {props.postData} />
                <h4 className="loading-comment-text"> Loading Comments </h4>
                <Loader className="comment-spinner" />
            </>
        )
      }


    return (
        <>
            <Post postData = {props.postData} />
            <div className="comments-container" id="comments-section">
             <ul className="comments-list">
                {commentsList.map(comment => {
                    return (
                        <li key={comment.id}>
                            <span className="comment-author">{comment.author}</span>
                            <ReactMarkdown>{comment.body}</ReactMarkdown>
                        </li>
                    )
                })}
             </ul>
            </div>
        </>
    )
}
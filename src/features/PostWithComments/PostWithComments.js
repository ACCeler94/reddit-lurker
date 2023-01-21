import React from "react";
import { Post } from "../../components/Post/Post";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchComments, isLoadingComments, selectComments } from "./postWithCommentsSlice";
import { selectSelectedPost } from "../Posts/postsSlice";
import { Loader } from "../../components/Loader/Loader";
import "./PostWithComments.css"
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { ImArrowUp } from "react-icons/im"

export function PostWithComments(props) {
    
    const dispatch = useDispatch();
    const commentsList = useSelector(selectComments);
    const loadingComments = useSelector(isLoadingComments);
    const selectedPost = useSelector(selectSelectedPost)
    const permalink = selectedPost.permalink
    const listOfComments = commentsList

    useEffect(() => {
        dispatch(fetchComments(permalink));
      }, [dispatch, permalink]);


   


      // function for rendering comment's replies
    const renderReplies = (comment) =>{
        if(comment.data.replies){
            return (
                <div className="reply">
                    {comment.data.replies.data.children.map(reply => {
                        return (
                            <div className="comment-card">
                                <span className="comment-author">{reply.data.author}</span>
                                <ReactMarkdown>{reply.data.body}</ReactMarkdown>
                                <div className="upvotes">
                                    <ImArrowUp id="comment-arrow-icon" /> 
                                    {reply.data.score}
                                </div>
                            </div>
                        )
                    })}
                </div>
            )}}


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
                        <li key={comment.data.id} className="comment">
                            <div className="comment-card">
                                <span className="comment-author">{comment.data.author}</span>
                                <ReactMarkdown>{comment.data.body}</ReactMarkdown>
                                <div className="upvotes"><ImArrowUp id="comment-arrow-icon" /> {comment.data.score}</div>
                                {renderReplies(comment)}  
                            </div>
                        </li>
                    )
                })}
             </ul>
            </div>
        </>
    )
}
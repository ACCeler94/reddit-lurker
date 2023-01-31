import React from "react";
import { Post } from "../Post/Post";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchComments, isLoadingComments, selectComments } from "./postWithCommentsSlice";
import { selectSelectedPost, showPostWithComments } from "../Posts/postsSlice";
import { Loader } from "../Loader/Loader";
import "./PostWithComments.css"
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { ImArrowUp } from "react-icons/im"
import { HiArrowNarrowRight } from "react-icons/hi";




export function PostWithComments(props) {
    
    const dispatch = useDispatch();
    const commentsList = useSelector(selectComments);
    const loadingComments = useSelector(isLoadingComments);
    const selectedPost = useSelector(selectSelectedPost)
    const permalink = selectedPost.permalink
    const showOnlyPostWithComments = useSelector(showPostWithComments)

    useEffect(() => {
        dispatch(fetchComments(permalink));
      }, [dispatch, permalink]);



      // function for rendering comment's replies
    const renderReplies = (comment) =>{
        if(comment.data.replies){
            return (
                <div className="reply">
                    {comment.data.replies.data.children.map(reply => {
                        if(reply.data.body){
                        return (
                            <div className="comment-card">
                                <span className="comment-author">{reply.data.author}</span>
                                <ReactMarkdown>{reply.data.body}</ReactMarkdown>
                                <div className="upvotes">
                                    <ImArrowUp id="comment-arrow-icon" /> 
                                    {reply.data.score}
                                </div>
                                {showMoreReplies(reply)}
                            </div>
                        )
                    }
                    })}
                </div>
            )}}


    const showMoreReplies = (reply) => {
        if(reply.data.replies){
            console.log(reply.data.replies)
            return (
                <span className="show-all-replies" onClick={() => renderReplies(reply)} >Show more replies <HiArrowNarrowRight className="show-more-replies-arrow" /> </span>
                
            )
        }
    }


      if(loadingComments){
        return (
            <>
                <Post postData = {props.postData} />
                <h4 className="loading-comment-text"> Loading Comments </h4>
                <Loader className="comment-spinner" />
            </>
        )
      }

      // show content of pinned and moderation posts when they are clicked
      if(showOnlyPostWithComments && document.getElementById('pinned-post')){
        document.getElementById('pinned-post').style.display = 'block'
      } 

    return (
        <>
            <Post postData = {props.postData} />
            <div className="comments-container" id="comments-section">
             <ul className="comments-list">
                {commentsList.map(comment => {
                    if(comment.data.body){
                    return (
                        <li key={comment.data.name} className="comment">
                            <div className="comment-card">
                                <span className="comment-author">{comment.data.author}</span>
                                <ReactMarkdown>{comment.data.body}</ReactMarkdown>
                                <div className="upvotes"><ImArrowUp id="comment-arrow-icon" /> {comment.data.score}</div>
                                {renderReplies(comment)}  
                            </div>
                        </li>
                    )}
                })}
             </ul>
            </div>
        </>
    )
}
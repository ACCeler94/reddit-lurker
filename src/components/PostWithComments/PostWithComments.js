import React from "react";
import { Post } from "../Post/Post";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchComments, fetchPostData, isLoadingComments, selectComments } from "./postWithCommentsSlice";
import { selectSelectedPost,} from "../Posts/postsSlice";
import { Loader } from "../Loader/Loader";
import "./PostWithComments.css"
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { ImArrowUp } from "react-icons/im"
import { numberConverter } from "../../helpers/numberConverter";
import { useLocation, useParams } from "react-router-dom";




export function PostWithComments() {
    
    const dispatch = useDispatch();
    const commentsList = useSelector(selectComments);
    const loadingComments = useSelector(isLoadingComments);
    const selectedPost = useSelector(selectSelectedPost);
    const permalink = selectedPost.permalink;
    const postData = useSelector(selectSelectedPost);
    const params = useParams();
    const location = useLocation();
    const pathname = location.pathname



    useEffect(() => {
        // fetch post data on page refresh
        if(!postData.id){
            dispatch(fetchPostData(pathname))
        };

        // pause fetching comments after refresh before post data is loaded
        if(!permalink){
            return
        } else {
        dispatch(fetchComments(permalink));
        }
      }, [dispatch, permalink, params, pathname, postData.id]);





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
                                    {numberConverter(reply.data.score)}
                                </div>
                                {renderReplies(reply)}
                            </div>
                        )
                    } return null
                    })}
                </div>
            )}
        return null 
    }

    // showing loader when loading post data after refresh
      if(!postData.id ){
        return (
            <div className="posts-loader">
            <h3>Loading Post...</h3>
            <Loader />
            </div>
        )
        
      }


      if(loadingComments){
        return (
            <>
                <Post postData = {postData} />
                <h4 className="loading-comment-text"> Loading Comments </h4>
                <Loader className="comment-spinner" />
            </>
        )
      }

      // show content of pinned and moderation posts when post is displayed
      if(params.key && document.getElementById('pinned-post')){
        document.getElementById('pinned-post').style.display = 'block'
      } 

    return (
        <>
            <Post postData = {postData} />
            <div className="comments-container" id="comments-section">
             <ul className="comments-list">
                {commentsList.map(comment => {
                    if(comment.data.body){
                    return (
                        <li key={comment.data.name} className="comment">
                            <div className="comment-card">
                                <span className="comment-author">{comment.data.author}</span>
                                <ReactMarkdown>{comment.data.body}</ReactMarkdown>
                                <div className="upvotes"><ImArrowUp id="comment-arrow-icon" /> {numberConverter(comment.data.score)}</div>
                                {renderReplies(comment)}  
                            </div>
                        </li>
                    )}
                    return null
                })}
             </ul>
            </div>
        </>
    )
}
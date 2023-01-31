import React from "react";
import { ImArrowUp } from "react-icons/im"
import {  BiCommentDetail } from "react-icons/bi";
import { RiShareBoxLine } from  "react-icons/ri"
import './Post.css'
import ReactMarkdown from "react-markdown";
import { linkShortener } from "../../utilities/linkShortener";
import { selectPost } from "../Posts/postsSlice";
import { useDispatch } from "react-redux";




export function Post(props){

    let contentType = props.postData.post_hint;
    const dispatch = useDispatch();

    // event handler for getting post props
    const postClickHandler = () =>{
        dispatch(selectPost(props.postData))
        
    }


    // statements for rendering different types of content

    // return statement for images
    const setContent = (contentType) => {
        if(contentType === "image") {
            return (
                <div className="media-container">
                    <img className="media" src={props.postData.url} alt="" />
                </div>
            )
            
        // return statement for gifs uploaded as video
        } else if(contentType === "rich:video" && props.postData.preview.reddit_video_preview){
            return (
                <div className="media-container">
                    <video className="media" src={props.postData.preview.reddit_video_preview.fallback_url} controls loop >Video not supported</video>
                </div>
            )

            //return statement for link type content
        } else if(contentType === "link"){
            return (
                <div className="link-container">
                    <a href={props.postData.url} target='_blank' className="link"> 
                    <img src={props.postData.thumbnail} className="link-thumbnail" alt="" />
                    <span className="link-text">{linkShortener(props.postData.url)}</span>
                    </a>
                </div>
            )

            // return statement for videos (currently no sound on videos)
        } else if(props.postData.is_video){
            return (
                <div className="media-container">
                    <video className="media" src={props.postData.media.reddit_video.fallback_url} controls loop>Video not supported</video>
                </div>
            )

        // return statement for long terms and condition posts to show only title
        } else if(contentType === "self" || props.postData.stickied){
            return (
                <div className="text-container" id="pinned-post" style={{display: "none"}}>
                    <ReactMarkdown>{props.postData.selftext}</ReactMarkdown>
                </div>
            )

            // return statement for text posts
        } else {
            if(props.postData.selftext) {           
                return (
                <div className="text-container">
                    <ReactMarkdown>{props.postData.selftext}</ReactMarkdown>
                </div>

            ) // edge case for some subreddits that have links uploaded in a different way
            } else {
                return (
                    <div className="link-container">
                        <a className="link" href={props.postData.url} target="_blank">{linkShortener(props.postData.url)}</a>
                    </div>
                )
            }
        }

    }


    
    
    // statement for rendering constant post elements
    return (
        <article id={props.postData.id}>
            <div className="post-wrapper">
                <div className="extra-container">
                    <div className="arrow-container">
                        <ImArrowUp id="arrow-icon" />
                        <span className="votes-number">{props.postData.score}</span>
                    </div>
                    <div className="comment-icon-container" onClick={postClickHandler}>
                        <BiCommentDetail id="comment-icon" />
                        <span className="comments-number">{props.postData.num_comments}</span>
                    </div>
                    <div>
                        <a href={"https://www.reddit.com" + props.postData.permalink} className="redirect-container" target="_blank">
                            <RiShareBoxLine id="redirect-icon" />
                            <span>Open on <span className="reddit">Reddit</span></span>
                        </a>
                    </div>
                </div>
            <div className="post-container" onClick={postClickHandler} >
                <div className="post-info">
                    <span className="subreddit-name">
                        {props.postData.subreddit_name_prefixed}
                    </span>
                    <h3 className="post-title" > {props.postData.title} </h3>
                    <span className="author">Posted by: {props.postData.author}</span>
                </div>
                <div className="content">
                    {setContent(contentType)}
                </div>
            </div>
        </div>
        </article>
    )
}
import React from "react";
import { ImArrowUp } from "react-icons/im"
import {  BiCommentDetail } from "react-icons/bi";
import { RiShareBoxLine } from  "react-icons/ri"
import './Post.css'
import ReactMarkdown from "react-markdown";



export function Post(props){

    let contentType = props.postData.post_hint

    const setContent = (contentType) => {
        if(contentType === "image") {
            return (
                <div className="media-container">
                    <img className="media" src={props.postData.url} alt="" />
                </div>
            )
        } else {
            return (
                <div className="text-container">
                    <ReactMarkdown>{props.postData.selftext}</ReactMarkdown>
                </div>
            )
        }
    }

    return (
        <article id={props.postData.id}>
            <div className="post-wrapper">
                <div className="extra-container">
                    <div className="arrow-container">
                        <ImArrowUp id="arrow-icon" />
                        <span className="votes-number">{props.postData.score}</span>
                    </div>
                    <div className="comment-icon-container">
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
            <div className="post-container">
                <div className="post-info">
                    <span className="subreddit-name">
                        {props.postData.subreddit_name_prefixed}
                    </span>
                    <h3 className="post-title"> {props.postData.title} </h3>
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
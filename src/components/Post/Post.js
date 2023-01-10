import React from "react";
import { ImArrowUp } from "react-icons/im"
import {  BiCommentDetail } from "react-icons/bi";
import { RiShareBoxLine } from  "react-icons/ri"
import './Post.css'



export function Post(props){

    let jsonContentPlaceholder = "pic"

    const setContent = (jsonContentPlaceholder) => {
        if(jsonContentPlaceholder === "pic") {
            return (
                <div className="media-container">
                    <img className="media" src="https://i.redd.it/qc29ozsgig6a1.jpg" alt="" />
                </div>
            )
        } else if(jsonContentPlaceholder === "text"){
            return (
                <div className="text container">
                    <p>This is placeholder text for reddit posts without any images in it. They will probably take more than one line so i will paste something here:
                    A  specifying a name for the line in that location. The ident may be any valid string other than the reserved words span and auto. Lines may have multiple names separated by a space inside the square brackets, for example line-name-a line-name-b.
                    </p>
                </div>
            )
        }
    }

    return (
        <article key=''>
            <div className="post-wrapper">
                <div className="extra-container">
                    <div className="arrow-container">
                        <ImArrowUp id="arrow-icon" />
                        <span className="votes-number">110K</span>
                    </div>
                    <div className="comment-icon-container">
                        <BiCommentDetail id="comment-icon" />
                        <span className="comments-number">20k</span>
                    </div>
                    <div>
                        <a href="" className="redirect-container">
                            <RiShareBoxLine id="redirect-icon" />
                            <span>Open on <span className="reddit">Reddit</span></span>
                        </a>
                    </div>
                </div>
            <div className="post-container">
                <div className="post-info">
                    <span className="subreddit-name">Subreddit name</span>
                    <h3 className="post-title">Title Placeholder</h3>
                    <span className="author">made by UserNamePlaceholder 8 hours ago</span>
                </div>
                <div className="content">
                    {setContent(jsonContentPlaceholder)}
                </div>
            </div>
        </div>
        </article>
    )
}
import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { defaultSubreddit, selectSubreddit } from "../Posts/postsSlice";
import "./ErrorElement.css"


export function ErrorElement() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    function goHome() {
        navigate("/")
        dispatch(selectSubreddit(defaultSubreddit))
    }

    function goBack() {
        navigate(-1)
    }

    return (
        <div className="error-element">
            <h3 id="message">Ooops! Something went wrong! (404) </h3>
            <div className="button-wrapper" >
                <button onClick={goHome} className="error-button" ><span>Go Home</span></button>
                <button onClick={goBack} className="error-button" ><span>Go back</span></button>
            </div>
        </div>
    )
    
}
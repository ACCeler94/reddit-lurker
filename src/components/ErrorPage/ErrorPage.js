import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { defaultSubreddit, selectSubreddit } from "../Posts/postsSlice";
import "./ErrorPage.css"


export function ErrorPage(props) {
    const type = props.errorType;
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
        <div className="error-page">
            <h3 id="message">Failed to load {type}!</h3>
            <div className="button-wrapper" >
                <button onClick={goHome} className="error-button" ><span>Go Home</span></button>
                <button onClick={goBack} className="error-button" ><span>Go back</span></button>
            </div>
        </div>
    )
    
}
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { defaultSubreddit, selectSubreddit } from "../Posts/postsSlice";
import "./ErrorElement.css"


export function ErrorElement() {
    const navigate = useNavigate();
    const dispatch = useDispatch();


    // get and set theme chosen by the user
    const [isDark] = useState(
        JSON.parse(localStorage.getItem("isDark"))
      );
    
      useEffect(() => {
        const rootElement = document.querySelector(":root");
        localStorage.setItem("isDark", JSON.stringify(isDark));
        if (isDark) {
          rootElement.classList.add("dark");
        } else {
          rootElement.classList.remove("dark");
        }
      }, [isDark]);
    

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
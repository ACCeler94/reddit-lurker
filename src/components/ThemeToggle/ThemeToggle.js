import React, { useEffect, useState } from 'react';
import './ThemeToggle.css'

export function ThemeToggle() {
    const [ isDark, setIsDark ] = useState(true);

    const root = document.querySelector(':root')

    const storeUserSetPreference = (pref) => {
        localStorage.setItem("isDark", pref);
        };

    
    const getUserSetPreference = () => {
        return localStorage.getItem("isDark");
            };


    const changeThemeHandler = () => {
        setIsDark(!isDark)
        storeUserSetPreference(isDark)
    }

    

    useEffect(() => {
        let userPref = getUserSetPreference()
        console.log(userPref)

        if(!isDark){
            root.classList.add('dark')
        } else {
            root.classList.remove('dark')
        }
    }, [isDark, root.classList ])


    return (
        <div className='toggle'>
            <input type='checkbox' id='darkmode-toggle' onChange={changeThemeHandler} defaultChecked={!isDark} />
            <label for='darkmode-toggle' id='toggle-label' />
        </div>
    )
}
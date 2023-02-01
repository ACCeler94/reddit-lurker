import React, { useEffect, useState } from 'react';
import './ThemeToggle.css'

export function ThemeToggle() {
    const [ isDark, setIsDark ] = useState(false);

    const root = document.querySelector(':root')

    useEffect(() => {
        if(isDark){
            root.classList.add('dark')
        } else {
            root.classList.remove('dark')
        }
    }, [isDark, root.classList])

    return (
        <div className='toggle'>
            <input type='checkbox' id='darkmode-toggle' onChange={() => setIsDark(!isDark)} />
            <label for='darkmode-toggle' id='toggle-label' />
        </div>
    )
}
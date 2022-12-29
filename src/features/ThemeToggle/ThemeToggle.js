import React from 'react';
import './ThemeToggle.css'

export function ThemeToggle() {
    return (
        <div className='toggle'>
            <input type='checkbox' id='darkmode-toggle' />
            <label for='darkmode-toggle' id='toggle-label' />
        </div>
    )
}
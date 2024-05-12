import React from 'react';
import '../css/Menu.css';

function Menu(){
    return (
        <div className="menu">
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
        </div>
    );
}

export default Menu;
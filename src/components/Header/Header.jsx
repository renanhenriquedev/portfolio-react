import React from 'react';
import {Link} from 'react-router-dom';


function Header() {
    return (
        <header>
            <ul>
                <li><Link to='/'>About Me</Link></li>
                <li><Link to='/projects'>Projects</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
        </header>
    )
}

export default Header;
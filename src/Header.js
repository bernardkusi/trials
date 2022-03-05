import React from 'react';
import {Link} from 'react-router-dom';


const Header = () => {
    return (
        <div className="nav">
            <div className="navlinks">
            <ul>
                <li><Link to='/' className="linkk">Home</Link></li>
                <li> <Link to='about' className="linkk">About</Link></li>
                <li><Link to='contact' className="linkk">Contact</Link></li>
                <li><Link to='services' className="linkk">Services</Link></li>
           
            </ul>
            </div>

        </div>
    )
}

export default Header

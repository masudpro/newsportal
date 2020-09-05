import React from 'react';
import { Link } from 'react-router-dom';



const Header = () => {
    return (
        <div className="menuBar">
           
            <nav className="purple">
            <ul>
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </nav>
        </div>
    );
};

export default Header;
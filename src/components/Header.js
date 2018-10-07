import React, { Component } from 'react';

class Header extends Component{
    render() {
        return( 
            <header className="masthead">
            <nav className="header-menu">
               <ul className="nav-container">
                 <li className="nav-item">
                    <a href ="#link" alt="home">
                    Home
                    </a>
                 </li>
                 <li className="nav-item">
                   <a href="#link" alt="interships">
                   About me
                    </a>
                  </li>
                  <li className="nav-item events">
                   <a href="#link" alt="events">
                  Contact me
                    </a>
                 </li>
               </ul>
            </nav>
         </header>
        );
    }
}

export default Header;
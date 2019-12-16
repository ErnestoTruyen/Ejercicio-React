import React from 'react';
import headerLogo from '../images/badge-header.svg'; 
import './styles/Header.css';

class Header extends React.Component {
    render(){
        return (
            <div className="Header__hero">
                <img src={headerLogo}></img>
            </div>
        );
    }
}

export default Header;
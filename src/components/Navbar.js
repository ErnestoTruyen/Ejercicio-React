import React from 'react';
import './styles/Navbar.css';
import navbarLogo from '../images/logo.svg';

class Navbar extends React.Component{
    render(){
        return (
            <div className="Navbar">
                <div className="container-fluid">
                    <a href="/" className="Navbar__brand">
                        <img className="Navbar__brand-logo" src={navbarLogo} alt="logo" />
                        <span className="font-weight-light">Platzi</span>
                        <span className="font-weight-bold" >Conf</span>
                    </a>
                </div>
            </div>
        );
    }
}

export default Navbar;
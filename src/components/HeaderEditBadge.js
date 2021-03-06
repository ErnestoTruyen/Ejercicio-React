import React from 'react';
import headerLogo from '../images/platziconf-logo.svg'; 
import './styles/HeaderEditBadge.css';

class HeaderEditBadge extends React.Component {
    render(){
        return (
            <div className="Header__hero">
                <img className="img-fluid headerImg" src={headerLogo} alt="logo"></img>
            </div>
        );
    }
}

export default HeaderEditBadge;
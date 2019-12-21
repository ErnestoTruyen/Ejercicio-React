import React from 'react';
import './styles/Badges.css'
import confLogo from '../images/badge-header.svg'

class Header extends React.Component {
    render(){
        return (
            <div className="Badges">
                <div className="Badges__hero">
                    <div className="Badges__container">
                        <img className="Badges_conf-logo" 
                             src={confLogo} 
                             alt="Conf Logo" 
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
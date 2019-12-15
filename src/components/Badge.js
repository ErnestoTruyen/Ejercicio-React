import React from 'react';
import './styles/Badge.css';
import confLogo from '../images/badge-header.svg';

class Badge extends React.Component {
    render(){
        return (
            <div className="Badge">
                <div className="badge_header">
                    <img src={confLogo} alt="Logo de la conferencia"></img>
                </div>
                <div className="badge_section-name">
                    <img 
                        className="badge_avatar" 
                        src="https://s.gravatar.com/avatar/48ed450623c299f8c135f614a819aefb?s=80" 
                        alt="Avatar">
                    </img>
                    <h1>Ernesto <br/> Truyen</h1>
                </div>
                <div className="badge_section-info" >
                    <p>Salesforce Developer</p>
                    <p>ernestoseisa@outlook.com</p>
                </div>
                <div className="badge_footer">
                    #platziconf
                </div>
            </div>
        );
    }
}

export default Badge;
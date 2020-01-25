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
                        className="Badge_avatar"
                        alt="Avatar"
                        src={this.props.avatarUrl}
                    />
                    <h1>{this.props.firstName} <br/> {this.props.lastName}</h1>
                </div>
                <div className="badge_section-info" >
                    <h3>{this.props.jobTitle}</h3>
                    <div>{this.props.linkedin}</div>
                </div>
                <div className="badge_footer">
                    #platziconf
                </div>
            </div>
        );
    }
}

export default Badge;
import React from 'react';
import Badge from './Badge';

const avatarURL = "https://s.gravatar.com/avatar/48ed450623c299f8c135f614a819aefb?s=80";

class Section extends React.Component{
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Badge 
                            firstName="Ernesto"
                            lastName="Truyen"
                            jobTitle="Salesforce Developer" 
                            linkedin="Ernesto Truyen"
                            avatarURL={avatarURL}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Section;
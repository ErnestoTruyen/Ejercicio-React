import React from 'react';
import Badge from './Badge';
import BadgeForm from './BadgeForm';

const avatarURL = "https://s.gravatar.com/avatar/48ed450623c299f8c135f614a819aefb?s=80";

class Section extends React.Component{

    state = {
        form : {
            firstName:'',
            lastName:'',
            email:'',
            jobTitle:'',
            linkedin: ''
        }
    };

    handleChange = e => {
        this.setState(
            {
                form: {
                    ... this.state.form,
                    [e.target.name]: e.target.value
                }
            }
        );
    }

    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <Badge 
                            firstName={this.state.form.firstName}
                            lastName={this.state.form.lastName}
                            jobTitle={this.state.form.jobTitle} 
                            linkedin={this.state.form.linkedin}
                            avatarURL={avatarURL}
                        />
                    </div>
                    <div className="col-6">
                        <BadgeForm 
                            onChange={this.handleChange}
                            formValues={this.state.form}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Section;
import React from 'react';
import Badge from './Badge';
import BadgeForm from './BadgeForm';
import api from '../pages/api';

// const avatarURL = "https://s.gravatar.com/avatar/48ed450623c299f8c135f614a819aefb?s=80";

class SectionNewBadge extends React.Component{

    state = {
        form : {
            firstName:'',
            lastName:'',
            email:'',
            jobTitle:'',
            linkedin: '',
            avatarUrl: ''
        }
    };
    componentDidMount(){
        console.log('Algo!');
    }

    handleChange = e => {
        this.setState(
            {
                form: {
                    ...this.state.form,
                    [e.target.name]: e.target.value
                }
            }
        );
    }

    handleSubmit = async e => {
        e.preventDefault();
        this.setState({loading: true, error: null});

        try {
            await api.badges.create(this.state.form);
            this.setState({loading: false});
        } catch (error) {
            this.setState({loading: false, error: error});
        }
    }
    
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <Badge 
                            firstName=
                                {this.state.form.firstName || 'FIRST_NAME'}
                            lastName=
                                {this.state.form.lastName || 'LAST_NAME'}
                            email = 
                                {this.state.form.email || 'Email'}
                            jobTitle=
                                {this.state.form.jobTitle || 'JOB_TITLE'} 
                            linkedin=
                                {this.state.form.linkedin || 'LINKEDIN'}
                        />
                    </div>
                    <div className="col-6">
                        <BadgeForm 
                            onChange={this.handleChange}
                            onSubmit={this.handleSubmit}
                            formValues={this.state.form}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default SectionNewBadge;
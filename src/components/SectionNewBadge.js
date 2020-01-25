import React from 'react';
import Badge from './Badge';
import BadgeForm from './BadgeForm';
import api from '../pages/api';
import md5 from 'md5';
import PageLoading from './PageLoading';

// const avatarURL = "https://s.gravatar.com/avatar/48ed450623c299f8c135f614a819aefb?s=80";

class SectionNewBadge extends React.Component{

    state = {
        loading : false,
        error: null,
        form : {
            firstName:'',
            lastName:'',
            email:'',
            jobTitle:'',
            linkedin: '',
            avatarUrl: 'https://www.gravatar.com/avatar/?d=identicon'
        }
    };
    componentDidMount(){
        console.log('Algo!');
    }

    handleChange = e => {
        console.log('evento: ',e.target.name);
        if(e.target.name === 'email'){
            const email = e.target.value;
            const hash = md5(email);
            this.setState(
                {
                    form: {
                        ...this.state.form,
                        [e.target.name]: e.target.value,
                        avatarUrl: `https://www.gravatar.com/avatar/${hash}?d=identicon`
                    }
                }
            );
        }else{
            this.setState(
                {
                    form: {
                        ...this.state.form,
                        [e.target.name]: e.target.value
                    }
                }
            );
        }
    }

    handleSubmit = async e => {
        e.preventDefault();
        this.setState({loading: true, error: null});

        try {
            await api.badges.create(this.state.form);
            this.setState({loading: false});

            this.props.history.push('/badges');
        } catch (error) {
            this.setState({loading: false, error: error});
        }
    }
    
    render(){
        if(this.state.loading){
            return (
                <React.Fragment>
                    <PageLoading />
                </React.Fragment>
            );
        }
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
                            avatarUrl=
                                {this.state.form.avatarUrl || ''}
                        />
                    </div>
                    <div className="col-6">
                        <BadgeForm 
                            onChange={this.handleChange}
                            onSubmit={this.handleSubmit}
                            formValues={this.state.form}
                            error={this.state.error}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default SectionNewBadge;
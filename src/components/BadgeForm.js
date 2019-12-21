import React from 'react';

class BadgeForm extends React.Component {

    // state = {};

    // handleChange = (e) => {
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     });
    // }

    handleClick = (e) => {
        console.log('hizo click en el boton');
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    render(){
        return (
            <div>
                <h1>New Attendant</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input 
                            onChange={this.props.onChange} 
                            className="form-control" 
                            type="text" 
                            name="firstName" 
                            value={this.props.formValues.firstName} 
                        />
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input 
                            onChange={this.props.onChange}
                            className="form-control" 
                            type="text" 
                            name="lastName"
                            value={this.props.formValues.lastName}>
                        </input>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input 
                            onChange={this.props.onChange}
                            className="form-control" 
                            type="email" 
                            name="email"
                            value={this.props.formValues.email}>
                        </input>
                    </div>
                    <div className="form-group">
                        <label>Job Title</label>
                        <input 
                            onChange={this.props.onChange}
                            className="form-control" 
                            type="text" 
                            name="jobTitle"
                            value={this.props.formValues.jobTitle}>
                        </input>
                    </div>
                    <div className="form-group">
                        <label>Linkedin</label>
                        <input 
                            onChange={this.props.onChange}
                            className="form-control" 
                            type="text" 
                            name="linkedin"
                            value={this.props.formValues.linkedin}>
                        </input>
                    </div>
                    <button 
                        onClick={this.handleClick}
                        className="btn btn-primary">Save
                    </button>
                </form>
            </div>
        );
    }
}

export default BadgeForm;
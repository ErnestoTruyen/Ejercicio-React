import React from 'react';
import './styles/PageError.css';

class PageError extends React.Component {
    render(){
        return (
            <React.Fragment>
                <div className="PageError">
                    {this.props.error.message}
                </div>
            </React.Fragment>
        );
    };
}

export default PageError;
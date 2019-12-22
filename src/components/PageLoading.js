import React from 'react';
import './styles/PageLoading.css';
import Loader from './Loader';

class PageLoading extends React.Component {
    render(){
        return (
            <React.Fragment>
                <div className="PageLoading">
                    <Loader />
                </div>
            </React.Fragment>
        );
    }
}

export default PageLoading;
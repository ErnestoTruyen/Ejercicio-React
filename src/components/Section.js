import React from 'react';
import BadgesList from './BadgesList';
import { Link } from 'react-router-dom';
import api from '../pages/api';
import PageLoading from './PageLoading';
import PageError from './PageError';

class Section extends React.Component {

    state = {
        loading: true,
        error: null,
        data: undefined
    }

    componentDidMount(){
        this.fetchData();
    }

    fetchData = async () => {
        this.setState({loading: true, error: null});
        try {
            const data = await api.badges.list();
            this.setState({loading: false, data: data});
        } catch (error) {
            this.setState({loading: false, error: error});
        }
    }

    render(){
        if(this.state.loading === true){
            return <PageLoading />;
        }

        if(this.state.error){
            return <PageError error={this.state.error} /> ;
        }

        return (
            <div className="Badges__container">
                <div className="Badges__buttons">
                    <Link to="/badges/new" 
                       className="btn btn-primary" >
                           New Badge
                    </Link>
                </div>
                <BadgesList badges={this.state.data} />
            </div>
        );
    }
}

export default Section;
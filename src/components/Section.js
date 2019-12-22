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
        console.log('entro a componentDidMount');
        this.fetchData();
    }

    fetchData = async () => {
        console.log('entro a fetchData');
        this.setState({loading: true, error: null});
        console.log('entro a fetchData 2');
        try {
            const data = await api.badges.list();
            console.log('entro al try antes');
            this.setState({loading: false, data: data});
            console.log('entro al try despues');
        } catch (error) {
            this.setState({loading: false, error: error});
        }
    }

    render(){
        console.log('entro a render');
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
import React from 'react';
import BadgeDetails from './BadgeDetails';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import api from './api';

class BadgeDetailsContainer extends React.Component{

    state = {
        loading: true,
        error: null,
        data: undefined,
        modalIsOpen: false
    };

    componentDidMount(){
        this.fetchData();
    }

    fetchData = async () =>{
        this.setState({loading: true, error: null});

        try{
            const data = await api.badges.read(
                this.props.match.params.badgeId
            );

            this.setState({loading: false, data: data});
        }catch(error){
            this.setState({loading: false, error: error});
        }
    }

    handleOpenModal = e =>{
        this.setState({
            modalIsOpen: true
        });
    }
    handleCloseModal = e =>{
        this.setState({
            modalIsOpen: false
        });
    }
    handleDeleteBadge = async e =>{
        this.setState({loading: true, error: null});

        try{
            api.badges.remove(
                this.props.match.params.badgeId
            );

            this.props.history.push('/badges');
        }catch(error){
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
        if(this.state.error){
            return (
                <React.Fragment >
                    <PageError error={this.state.error}/>
                </React.Fragment>
            );
        }else{
            return (
                <React.Fragment>
                    <BadgeDetails 
                        onCloseModal={this.handleCloseModal} 
                        onOpenModal={this.handleOpenModal}
                        modalIsOpen={this.state.modalIsOpen}
                        onDeleteBadge={this.handleDeleteBadge}
                        badge={this.state.data}/>
                </React.Fragment>
            );
        }
    }
}
export default BadgeDetailsContainer;
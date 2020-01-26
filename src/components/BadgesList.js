import React from 'react';
import BadgesListItem from './BadgesListItem';
import './styles/BadgesList.css'
import { Link } from 'react-router-dom';

class BadgesList extends React.Component {
    render(){
        if(this.props.badges.length === 0){
            return (
                <div>
                    <h3>No se han encontrado resultados</h3>
                    <Link className="btn btn-primary"
                          to="/badges/new">Create New Badge</Link>
                </div>
            );
        }
        return (
            <div className="BadgesList">
                <ul className="list-unstyled">
                    {this.props.badges.map(badge =>{
                        return (
                            <li key={badge.id}>
                                <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}`}>
                                    <BadgesListItem badge={badge} />
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    };
}

export default BadgesList;
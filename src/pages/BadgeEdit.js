import React from 'react';
import HeaderEditBadge from '../components/HeaderEditBadge';
import SectionEditBadge from '../components/SectionEditBadge';


class BadgeEdit extends React.Component{
    render(){
        return (
            <React.Fragment>
                <HeaderEditBadge />
                <SectionEditBadge match={this.props.match} history={this.props.history} />
            </React.Fragment>
        );
    }
}
export default BadgeEdit;
import React from 'react';
import HeaderNewBadge from '../components/HeaderNewBadge';
import SectionNewBadge from '../components/SectionNewBadge';


class BadgeNew extends React.Component{
    render(){
        return (
            <React.Fragment>
                <HeaderNewBadge />
                <SectionNewBadge />
            </React.Fragment>
        );
    }
}
export default BadgeNew;
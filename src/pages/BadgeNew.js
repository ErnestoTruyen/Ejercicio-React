import React from 'react';
import Navbar from '../components/Navbar';
import HeaderNewBadge from '../components/HeaderNewBadge';
import SectionNewBadge from '../components/SectionNewBadge';


class BadgeNew extends React.Component{
    render(){
        return (
            <div>
                <Navbar />
                <HeaderNewBadge />
                <SectionNewBadge />
            </div>
        );
    }
}
export default BadgeNew;
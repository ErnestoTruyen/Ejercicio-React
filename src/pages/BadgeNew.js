import React from 'react';
import Navbar from '../components/Navbar';
import HeaderNewBadge from '../components/HeaderNewBadge';
import Section from '../components/Section';


class BadgeNew extends React.Component{
    render(){
        return (
            <div>
                <Navbar />
                <HeaderNewBadge />
                <Section />
            </div>
        );
    }
}
export default BadgeNew;
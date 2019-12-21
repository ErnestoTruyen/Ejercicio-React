import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header'
import Section from '../components/Section'


class Badges extends React.Component {
    render(){
        return (
            <div>
                <Navbar />
                <Header />
                <Section/>
            </div>
        );
    }
}

export default Badges;
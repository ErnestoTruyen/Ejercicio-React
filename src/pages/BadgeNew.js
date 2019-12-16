import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header'
import confLogo from '../images/badge-header.svg';

class BadgeNew extends React.Component{
    render(){
        return (
            <div>
                <Navbar logo={confLogo} />
                <Header />
            </div>
        );
    }
}
export default BadgeNew;
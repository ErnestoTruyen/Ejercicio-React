import React from 'react';
import Navbar from './Navbar';

function Layout(ernesto){
    return (
        <React.Fragment>
            <Navbar />
            {ernesto.children}
        </React.Fragment>
    );
}

export default Layout;
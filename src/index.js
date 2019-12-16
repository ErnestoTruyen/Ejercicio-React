import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './global.css';

import BadgeNew from './pages/BadgeNew'

const container = document.getElementById('app');
ReactDOM.render(
    <BadgeNew 
        firstName="Ernesto"
        lastName="Truyen"
        jobTitle="Salesforce Developer" 
        linkedin="Ernesto Truyen"
        avatarURL="https://s.gravatar.com/avatar/48ed450623c299f8c135f614a819aefb?s=80"
    />,
    container
);
import React from 'react';
import './styles/HeaderHome.css'
import Astronauts from '../images/astronauts.svg';
import PlatziconfLogo from '../images/platziconf-logo.svg';
import { Link } from 'react-router-dom';

class HeaderHome extends React.Component{
    render(){
        return (
            <React.Fragment>
                <div className="Header__home">
                    <div className="row rowHome">
                        <div className="legend col">
                            <div className="ordenateItems">
                                <img src={PlatziconfLogo} alt="Astronauts"/>
                                <h1>PRINT YOUR BADGES</h1>
                                <p>The easiest way to manage your conference</p>
                                <Link to="/badges"
                                      className="btn btn-primary">
                                          Start Now
                                </Link>
                            </div>
                        </div>
                        <div className="col astronautsImg">
                            <img src={Astronauts} alt="Astronauts"/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default HeaderHome;
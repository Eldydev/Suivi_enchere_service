import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import auth0Client from './Auth';
import NavBar from './components/Navigation/NavBar.js';

class Home extends Component {
    componentDidMount() {
        if (!auth0Client.isAuthenticated()) {
            auth0Client.signIn();
        }
    }
    render() {

        return (
            <div className="App" >
                <header className="App-header">
                    <NavBar />
                    {
                        auth0Client.isAuthenticated() &&
                        <div>
                            <label className="mr-2 text-white">{auth0Client.getProfile().name}</label>
                            <br />
                        </div>
                    }

                </header>
            </div>
        )
    }

}

export default Home;
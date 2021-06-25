import React, { Component } from 'react';
import { useLocation, Link } from "react-router-dom";
import auth0Client from '../../Auth';
import SearchBarLP from '../API/SuiviLaPoste.js'

import './Navbar.css';

class Navbar extends Component {
    constructor() {
      super();
      this.state = {};
    }

    signOut = () => {
      auth0Client.signOut();
      this.props.history.replace('/');
  }

    render() {
      return (
          <div className="NavBar">
              <div>
              <Link
                  to={{
                    pathname: '/contact'
                  }}
                >
                  <button>CONTACT</button>
                </Link>
              </div>
              <div>
                <button className="btn btn-dark" onClick={() => { this.signOut() }}>DECONNEXION</button>
              </div>
              <div>
              <Link
                  to={{
                    pathname: '/suivicoli'
                  }}
                >
                  <button>API LA POSTE</button>
                </Link>
                </div>
          </div>
      );
    }
  }

  export default Navbar
import React, { Component } from 'react';
import { useLocation, Link } from "react-router-dom";

import './Navbar.css';

class Navbar extends Component {
    constructor() {
      super();
      this.state = {};
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
                  <button>Contact</button>
                </Link>
              </div>
              <div>
              <Link
                  to={{
                    pathname: '/dashboard'
                  }}
                >
                  <button>dashboard</button>
                </Link>
              </div>
              <div>
                  <button>button 3</button>
                </div>
          </div>
      );
    }
  }

  export default Navbar
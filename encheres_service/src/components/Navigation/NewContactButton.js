import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './NewContactButton.css';


class NewContactButton extends Component {
    constructor() {
        super();
        this.state = {
        };
    }

    render() {
        return (
            <div id="NewContactButton">
                <Link
                    to={{
                        pathname: '/newcontact'
                    }}
                >
                    <button> + Ajouter Contact</button>
                </Link>
            </div>
        );
    }
}

export default NewContactButton
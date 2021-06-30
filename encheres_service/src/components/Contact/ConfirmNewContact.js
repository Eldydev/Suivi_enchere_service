import React, { Component } from 'react';
import { Link } from "react-router-dom";


class ConfirmNewContact extends Component {
    constructor() {
        super();
        this.state = {
        };
    }

    Confirm() {
        document.getElementById('ConfirmNewContact').style.display = "none"
    }


    render() {
        return (
            <div id="ConfirmNewContact">
                <p>Contact Créé</p>
                <Link
                    to={{
                        pathname: '/contact'
                    }}
                >
                    <button onClick={(e) => this.Confirm()}>OK</button>
                </Link>
            </div>
        );
    }
}

export default ConfirmNewContact
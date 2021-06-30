import React, { Component } from 'react';
import { Link } from "react-router-dom";


class ConfirmUpdateContact extends Component {
    constructor() {
        super();
        this.state = {
        };
    }

    Confirm() {
        document.getElementById('ConfirmUpdateContact').style.display = "none"
        document.getElementById('UCF').style.display = "none"
    }


    render() {
        return (
            <div id="ConfirmUpdateContact">
                <p>Contact Mis à Jour</p>
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

export default ConfirmUpdateContact
import React, { Component } from 'react';

import './Contact.css';


class UpdateContactButton extends Component {
    constructor() {
        super();
        this.state = {
        };
    }

    Confirm() {
        document.getElementById('UCF').style.display = 'block'
    }

    render() {
        return (
            <div id="UpdateContactButton">
                <button onClick={(e) => this.Confirm()}> Modifier Contact</button>
            </div>
        );
    }
}

export default UpdateContactButton
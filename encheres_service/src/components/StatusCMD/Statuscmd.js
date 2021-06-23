import React, { Component } from 'react';
import Mail from "../Mail/Mail.js"
import './Statuscmd.css';


class Statuscmd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: "",
            id: ""
        };
    }

    UpdateStatus(status, id) {
        console.log('status :', status)
        console.log('id :', id)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                status: status,
                id: id
            })
        };
        fetch('https://api.suivi-encheres-services.fr/v1/update-status', requestOptions)
            .then(console.log('body: ', requestOptions))
            .then(response => response.json())
            .then(data => console.log(data))
    }

    render() {
        return (
            <div>
            </div>
        );
    }
}

export default Statuscmd
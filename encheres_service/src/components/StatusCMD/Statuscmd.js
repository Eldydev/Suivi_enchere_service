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
        var date = new Date();
        const options = { timezone: 'Europe/Paris', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', hour12: false, minute: '2-digit', second: '2-digit' };
        date = date.toLocaleDateString('en-CA', options);
        console.log(date)
        date = date.toString(date)
        date = date.replaceAll('/', '-')
        date = date.replace(',', '')
        console.log(date)
        console.log('status :', status)
        console.log('id :', id)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                status: status,
                id: id,
                date: date
            })
        };
        fetch('https://api.suivi-encheres-services.fr/v1/update-status', requestOptions)
            .then(console.log('body: ', requestOptions))
            .then(response => response.json())
            .then(data => console.log(data))
            .then(
                document.getElementById('ConfirmStatus').style.display ="block"
            )
    }

    render() {
        return (
            <div>
            </div>
        );
    }
}

export default Statuscmd
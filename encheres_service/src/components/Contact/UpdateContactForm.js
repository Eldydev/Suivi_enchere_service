import React, { Component } from 'react';
import './ContactForm.css';
import ConfirmUpdateContact from './ConfirmUpdateContact';

class UpdateContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nom: this.props.contact.Last_Name,
            prénom: this.props.contact.First_Name,
            email: this.props.contact.Email,
            tel: this.props.contact.Phone,
            société: this.props.contact.Company,
            rue: this.props.contact.Address_Street,
            ville: this.props.contact.Address_City,
            cp: this.props.contact.Address_Zip,
            pays: this.props.contact.Address_Country,
            rueadl: this.props.contact.Adresse_de_livraison,
            villeadl: this.props.contact.VILLE_LIVRAISON,
            cpadl: this.props.contact.code_postal_LIVRAISON,
            paysadl: this.props.contact.PAYS_LIVRAISON,
            id: this.props.contact.id

        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    UpdateContact() {
        var date = new Date();
        const options = { timezone: 'Europe/Paris', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', hour12: false, minute: '2-digit', second: '2-digit' };
        date = date.toLocaleDateString('en-CA', options);
        console.log(date)
        date = date.toString(date)
        date = date.replaceAll('/', '-')
        date = date.replace(',', '')
        console.log(date)

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                nom: this.state.nom,
                prénom: this.state.prénom,
                email: this.state.email,
                tel: this.state.tel,
                société: this.state.société,
                rue: this.state.rue,
                ville: this.state.ville,
                cp: this.state.cp,
                pays: this.state.pays,
                rueadl: this.state.rueadl,
                villeadl: this.state.villeadl,
                cpadl: this.state.cpadl,
                paysadl: this.state.paysadl,
                date: date,
                id: this.state.id
            })
        };
        fetch('https://api.suivi-encheres-services.fr/v1/update-contact', requestOptions)
            .then(console.log('body: ', requestOptions))
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data.result == 'succes') {
                    document.getElementById('ConfirmUpdateContact').style.display = "block"
                }
            })

    }

    render() {
        console.log(this.props.contact)
        console.log('updateContactform props', this.state)
        return (
            <div id="UCF">
                <h2>MODIFIER CONTACT</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Nom:
                        <input
                            name="nom"
                            type="textarea"
                            value={this.state.nom}
                            onChange={this.handleInputChange} />
                    </label>
                    <label>
                        Prénom:
                        <input
                            name="prénom"
                            type="textarea"
                            value={this.state.prénom}
                            onChange={this.handleInputChange} />
                    </label>
                    <label>
                        Email:
                        <input
                            name="email"
                            type="textarea"
                            value={this.state.email}
                            onChange={this.handleInputChange} />
                    </label>
                    <label>
                        tel:
                        <input
                            name="tel"
                            type="textarea"
                            value={this.state.tel}
                            onChange={this.handleInputChange} />
                    </label>
                    <label>
                        Société:
                        <input
                            name="société"
                            type="textarea"
                            value={this.state.société}
                            onChange={this.handleInputChange} />
                    </label>
                    <p>Adresse</p>
                    <label>
                        Rue:
                        <input
                            name="rue"
                            type="textarea"
                            value={this.state.rue}
                            onChange={this.handleInputChange} />
                    </label>
                    <label>
                        Ville:
                        <input
                            name="ville"
                            type="textarea"
                            value={this.state.ville}
                            onChange={this.handleInputChange} />
                    </label>
                    <label>
                        Code Postal:
                        <input
                            name="cp"
                            type="textarea"
                            value={this.state.cp}
                            onChange={this.handleInputChange} />
                    </label>
                    <label>
                        pays:
                        <input
                            name="pays"
                            type="textarea"
                            value={this.state.pays}
                            onChange={this.handleInputChange} />

                    </label>
                    <p >Adresse de livraison</p>
                    <label >
                        Rue:
                        <input
                            name="rueadl"
                            type="textarea"
                            value={this.state.value}
                            onChange={this.handleInputChange}
                        />
                    </label>
                    <label >
                        Ville:
                        <input
                            name="villeadl"
                            type="textarea"
                            value={this.state.value}
                            onChange={this.handleInputChange} />
                    </label>

                    <label >
                        Code Postal:
                        <input
                            name="cpadl"
                            type="textarea"
                            value={this.state.value}
                            onChange={this.handleInputChange}
                        />
                    </label>
                    <label >
                        pays:
                        <input
                            name="paysadl"
                            type="textarea"
                            value={this.state.value}
                            onChange={this.handleInputChange} />
                    </label>

                    <input id="CUFB" type="button" value="Mettre à Jour" onClick={(e) => this.UpdateContact()} />
                </form>
                <ConfirmUpdateContact />
            </div>
        );
    }
}

export default UpdateContactForm
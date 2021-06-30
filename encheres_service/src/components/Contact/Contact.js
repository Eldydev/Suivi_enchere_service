import React, { Component } from 'react';

import SearchBar from './SearchBar.js'
import ReactPaginate from 'react-paginate';
import NavBar from '../Navigation/NavBar.js';
import NewContactButton from '../Navigation/NewContactButton.js';
import PaginacionTabla from "./Pagination.js";
import './Contact.css';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ContactArray: [],
            ContactArrayFiltered: [],
            input: "",
            filter: 'LastName',
            Cmdfilter: '',
            itemsperpage: 20,
            nocolumns: 50,
        }
        const PAGE_SIZE = 10;
        const pageCount = this.state.ContactArrayFiltered.length / PAGE_SIZE;
        console.log(this.state.pageCount)

        this.setState({ pageCount })

        this.renderContact = this.renderContact.bind(this);

    }

    componentDidMount() {
        fetch('https://api.suivi-encheres-services.fr/v1/get-contact')
            .then(res => res.json())

            .catch(error => console.error('Error: ', error))

            .then(response => {
                console.log('Success: ', response)
                console.log(response.rows)
                this.setState({
                    ContactArray: response.rows,
                    ContactArrayFiltered: response.rows,
                    ItemCount: response.rows.length
                })
            });
    }

    renderContact(contact, index) {

        return (
            <tr key={index}>
                <td>{contact.First_Name}</td>
                <td>{contact.Last_Name}</td>
                <td>{contact.Email}</td>
                <td>
                    <select>
                        <option value="attente_paiement">attente paiement</option>
                        <option value="payé">payé</option>
                    </select>
                </td>
                <td>{contact.Phone}</td>
                <td>{contact.Address_Street}</td>
                <td>{contact.Address_City}</td>
                <td>{contact.Address_State}</td>
                <td>{contact.Address_Zip}</td>
                <td>{contact.Address_Country}</td>
                <td>{contact.Company}</td>
                <td>{contact.Labels}</td>
                <td>{contact.Created_At}</td>
                <td>{contact.Subscription_Status}</td>
                <td>{contact.Last_Activity}</td>
                <td>{contact.Last_Activity_Date}</td>
                <td>{contact.Source}</td>
                <td>{contact.Pays}</td>
                <td>{contact.Code_Postal}</td>
                <td>{contact.Adresse_de_livraison}</td>
                <td>{contact.Date}</td>
            </tr>
        )
    }

    setKeyword(input) {

        var filter = this.state.Cmdfilter

        this.setState({ input: input })
        if (filter !== '') {
            if (this.state.filter == 'email') {
                this.setState({ input: input })
                var ArrayCmdFiltered = this.state.ContactArray.filter(person => person.avancement_cmd.includes(filter));
                var test = ArrayCmdFiltered.filter(person => person.Email.toUpperCase().includes(input.toUpperCase()));
                this.setState({ ContactArrayFiltered: test })
            }
            if (this.state.filter == 'LastName') {
                this.setState({ input: input })
                var ArrayCmdFiltered = this.state.ContactArray.filter(person => person.avancement_cmd.includes(filter));
                var test = ArrayCmdFiltered.filter(person => person.Last_Name.toUpperCase().includes(input.toUpperCase()));
                this.setState({ ContactArrayFiltered: test })
            }
        }
        else {
            if (this.state.filter == 'email') {
                this.setState({ input: input })
                console.log('contactarray4filterFirstName', this.state.ContactArray)
                var test = this.state.ContactArray.filter(person => person.Email.toUpperCase().includes(input.toUpperCase()));
                this.setState({ ContactArrayFiltered: test })
            }
            if (this.state.filter == 'LastName') {
                this.setState({ input: input })
                var test = this.state.ContactArray.filter(person => person.Last_Name.toUpperCase().includes(input.toUpperCase()));
                this.setState({ ContactArrayFiltered: test })
            }
        }


    }

    Cmdfiltered(filter) {

        if (filter == 'payémdv') {
            console.log('payé MDV filter')
            var test = this.state.ContactArray.filter(person => person.avancement_cmd.includes('payé_MDV'));
            this.setState({ ContactArrayFiltered: test })
            console.log('ArrayFiltered :', test)
        }
        if (filter == 'récupéré') {
            console.log('Récupéré filter')
            var test = this.state.ContactArray.filter(person => person.avancement_cmd.includes('récupéré'));
            this.setState({ ContactArrayFiltered: test })
            console.log('ArrayFiltered :', test)
        }
        if (filter == 'expédié') {
            console.log('expédié filter')
            var test = this.state.ContactArray.filter(person => person.avancement_cmd.includes('Expédié'));
            this.setState({ ContactArrayFiltered: test })
            console.log('ArrayFiltered :', test)
        }

    }

    ChangeBackground(value) {
        console.log('CB : ', value);
    }

    ChangeFilter(value) {
        console.log('ChangeFilter :', value)
        if (value == "FirstName") {
            this.setState({ filter: 'FirstName' })
        }
        if (value == "email") {
            this.setState({ filter: 'email' })
        }
    }

    ChangeCmdFilter(value) {
        if (value == "payémdv") {
            this.setState({ Cmdfilter: 'payé_MDV' })
            this.Cmdfiltered('payémdv')
        }
        if (value == "récupéré") {
            this.setState({ Cmdfilter: 'récupéré' })
            this.Cmdfiltered('récupéré')
        }
        if (value == "expédié") {
            this.setState({ Cmdfilter: 'Expédié' })
            this.Cmdfiltered('expédié')
        }
    }

    handlePageClick = (data) => {
        let selected = data.selected;
        let offset = Math.ceil(selected * this.props.perPage);

        this.setState({ offset: offset }, () => {
            this.renderContact();
        });
    };





    /*updateInput = async (input) => {
        const filtered = countryListDefault.filter(country => {
         return country.name.toLowerCase().includes(input.toLowerCase())
        })
        setInput(input);
        setCountryList(filtered);
     }*/

    render() {
        console.log(this.state.input)
        if (this.state.ContactArray.length !== 0) {
            console.log('lenght : ', this.state.ContactArray.length)
            console.log('page', this.state.pageCount)

            return (
                <div>
                    <h2>Contact</h2>
                    <NavBar />
                    <NewContactButton />
                    <div id="Contactfilterbox">
                        <select className="contactfilters" onChange={(e) => this.ChangeCmdFilter(e.target.value)}>
                            <option value="empty">Statut commande</option>
                            <option value="payémdv">Payé MDV</option>
                            <option value="récupéré">Récupéré</option>
                            <option value="expédié">Expédié</option>
                        </select>
                        <select className="contactfilters" onChange={(e) => this.ChangeFilter(e.target.value)}>
                            <option value="LastName">Nom</option>
                            <option value="email">Email</option>
                        </select>
                        <input
                            id="filterinput"
                            //style={BarStyling}
                            key="random1"
                            value={this.state.input}
                            placeholder={"search name"}
                            onChange={(e) => this.setKeyword(e.target.value)}
                        />
                    </div>
                    <table id="ContactTable">
                        <thead>
                            <tr>
                                <td id="testid">id</td>
                                <td>Prénom</td>
                                <td>Nom</td>
                                <td>mail</td>
                                <td>tel</td>
                                <td>statut commande</td>
                                <td>Date dernière activitée</td>
                            </tr>
                        </thead>
                        <PaginacionTabla
                            itemsperpage={this.state.itemsperpage}
                            nocolumns={this.state.nocolumns}
                            items={this.state.ContactArrayFiltered}
                            pagesspan={4}
                        />
                    </table>
                </div>
            );

        } else {
            return (
                <div>
                    <h2>Loading ...</h2>
                </div>
            );
        }
    }
}

/*<tbody>
{this.state.ContactArrayFiltered.map(this.renderContact)}
</tbody>*/
//const BarStyling = { width: "20rem", background: "#F2F1F9", border: "none", padding: "0.5rem" };

export default Contact;
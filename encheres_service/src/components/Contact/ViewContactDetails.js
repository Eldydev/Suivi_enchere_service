import React, { Component } from 'react';
import { useLocation, Link } from "react-router-dom";

import NavBar from "../Navigation/NavBar.js"
import SearchBarLP from "../API/SuiviLaPoste.js"
import Mail from "../Mail/Mail.js"
import Mdvlist from '../MDV/mdv.js'
import Numsuivi from '../NumSuivi/Numsuivi.js'
import Statuscmd from '../StatusCMD/Statuscmd.js'
import ConfirmStatus from './ConfirmStatus.js';

class ViewContactDetails extends Component {
  constructor() {
    super();
    this.state = {
      user: [],
      object: '',
      text: '',
      mdv: [],
      numsuivi: '',
      status: '',
      id_mdv: ''
    };
  }

  componentDidMount() {

    var loc = this.props.location.state.users.id
    console.log('loc', loc)
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: loc
      })
    };
    fetch('https://api.suivi-encheres-services.fr/v1/get-MDV', requestOptions)
      .then(console.log('body: ', requestOptions))
      .then(res => res.json())
      .catch(error => console.error('Error: ', error))
      .then(response => {
        console.log('get-mdv - Success: ', response)
        var id_mdv = response.rows[0].id_MDV
        this.displayMDV(id_mdv)
      })


  }

  displayMDV(id) {

    if (id !== '') {

      document.getElementById('MDVlist').style.display = "none"
    }
  }

  handleMdv = (MdvValue) => {
    console.log('mdvchoose :', MdvValue)
    this.setState({ mdv: MdvValue });
  }

  ChangeStatus(value, name, mdv, id) {
    console.log('mdv :', mdv)
    console.log('status :', value)
    this.setState({ status: value })

    var txt = ""
    if (value == 'payé_MDV') {
      this.settextPmdv(value, name, mdv, id)
    }

    if (value == 'récupéré') {

      this.settextRec(value, name, mdv, id)
    }

    if (value == 'Expédié') {

      console.log('state: user :', this.state.user)


      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: id
        })
      };
      fetch('https://api.suivi-encheres-services.fr/v1/get-number', requestOptions)
        .then(console.log('body: ', requestOptions))
        .then(res => res.json())
        .catch(error => console.error('Error: ', error))
        .then(response => {
          console.log('Success: ', response)
          console.log(response.rows[0].Numsuivi)
          this.setState({ numsuivi: response.rows[0].Numsuivi })
          this.settextExp(value, name, mdv, id)
        })

    }

  }

  settextExp(value, name, mdv, id) {

    console.log('numEXP', this.state.numsuivi)

    var txt = "Bonjour Mme / Mr, " + name + "," +
      "\n\nNous vous confirmons l'expédition de votre / vos lots du bordereau xxxx " +
      "sous le numéro de suivi transporteur Colissimo La Poste suivant :  N° de suivi = " + this.state.numsuivi +
      "\n\nVous pouvez suivre son acheminement sous le numéro de suivi suivant " +
      "via le lien https://www.laposte.fr/outils/suivre-vos-envois " +
      "\n\nNous vous en souhaitons bonne réception," +
      "\n\nBien cordialement," +
      "\n\nSignature ES"
    var object = "Mise à jour de votre statut de commande à EXPEDIE"

    this.setState({ text: txt })
    this.setState({ object: object })
    console.log(object)
    console.log(txt)
    this.refs.mail.Confirm(object, txt);
  }

  settextPmdv(value, name, mdv, id) {

    console.log('numPMVD', this.state.numsuivi)

    var txt = "Bonjour Mme / Mr " + name + "," +
      "\n\nNous vous remercions pour votre paiement et votre confiance." +
      "\n\nNous allons nous rapprocher de la Maison " + mdv.nom + " (" + mdv.designation + ") à " + mdv.ville + " et organiser le retrait du bordereau XXXX en date du XXXX concerné par votre demande." +
      "\n\n(nous vous rappelons que nous ne pouvons procéder au retrait  qu'à la condition de la réception de votre paiement par l'hôtel des ventes)." +
      "\n\nNous vous tiendrons informé du suivi de votre demande.Bien cordialement," +
      "\n\nSignature ES"
    var object = "Mise à jour de votre statut de commande à PAYE MDV"

    this.setState({ text: txt })
    this.setState({ object: object })
    console.log(object)
    console.log(txt)
    this.refs.mail.Confirm(object, txt);
  }

  settextRec(value, name, mdv, id) {

    var txt = "Bonjour Mme / Mr " + name + "," +
      "\n\nNous avons bien récupéré votre lot correspondant au Bordereau n°xxxx auprès de la maison de vente " + mdv.nom + " (" + mdv.designation + ") à " + mdv.ville +
      "\n\nNous allons nous procéder à l'emballage de votre bien avec attention et  vous tiendrons informé de son expédition ou sa livraison." +
      "\n\nBien cordialement," +
      "\n\nSignature ES"
    var object = "Mise à jour de votre statut de commande à RECUPERE"

    this.setState({ text: txt })
    this.setState({ object: object })
    console.log(object)
    console.log(txt)
    this.refs.mail.Confirm(object, txt);
  }


  render() {

    const { state } = this.props.location


    return (
      <div>
        <NavBar />
        <div>
          <strong>Id:</strong> {state.users.id}{" "}
        </div>
        <div>
          <strong>Prénom:</strong> {state.users.First_Name}{" "}
        </div>
        <div>
          <strong>Nom:</strong> {state.users.Last_Name}{" "}
        </div>
        <div>
          <strong>Email:</strong> {state.users.Email}{" "}
        </div>
        <div>
          <strong>tel:</strong> {state.users.Phone}{" "}
        </div>
        <div>
          <strong>Rue:</strong> {state.users.Address_Street}{" "}
        </div>
        <div>
          <strong>Ville:</strong> {state.users.Address_City}{" "}
        </div>
        <div>
          <strong>Etat:</strong> {state.users.Address_State}{" "}
        </div>
        <div>
          <strong>Zip:</strong> {state.users.Address_Zip}{" "}
        </div>
        <div>
          <strong>Pays:</strong> {state.users.Address_Country}{" "}
        </div>
        <div>
          <strong>Société:</strong> {state.users.Company}{" "}
        </div>
        <div>
          <strong>label:</strong> {state.users.Labels}{" "}
        </div>
        <div>
          <strong>Créé le:</strong> {state.users.Created_At}{" "}
        </div>
        <div>
          <strong>Etat abo.:</strong> {state.users.Subscription_Status}{" "}
        </div>
        <div>
          <strong>Derniere activitée:</strong> {state.users.Last_Activity}{" "}
        </div>
        <div>
          <strong>Date derniere activitée:</strong> {state.users.Last_Activity_Date}{" "}
        </div>
        <div>
          <strong>Source:</strong> {state.users.Source}{" "}
        </div>
        <div>
          <strong>Contact.Pays:</strong> {state.users.Pays}{" "}
        </div>
        <div>
          <strong>Contact.CP:</strong> {state.users.Code_Postal}{" "}
        </div>
        <div>
          <strong>Adresse de livraison:</strong> {state.users.Adresse_de_livraison}{" "}
        </div>
        <div>
          <strong>Contact.date:</strong> {state.users.Date}{" "}
        </div>

        <div>
          <Mdvlist onSelectMdv={this.handleMdv}
            ref="mdvlist"
            userid={state.users.id} />
        </div>
        <div>
          <select onChange={(e) => this.ChangeStatus(e.target.value, state.users.Last_Name, this.state.mdv, state.users.id)}>
            <option value="dafault">choississez un status</option>
            <option value="payé_MDV">payé MDV</option>
            <option value="récupéré">récupéré</option>
            <option value="Expédié">Expédié</option>
          </select>
        </div>
        <div>
          <Numsuivi
            ref="numsuivi"
            userid={state.users.id}
            cmd={state.users.avancement_cmd}
          />
        </div>
        <Mail
          ref="mail"
          mail={state.users.Email}
          object={this.state.object}
          text={this.state.text}
          status={this.state.status}
          userid={state.users.id}
        />
        <ConfirmStatus />
      </div>
    );
  }
}

export default ViewContactDetails
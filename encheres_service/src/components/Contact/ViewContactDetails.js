import React, { Component } from 'react';
import { useLocation, Link } from "react-router-dom";

import NavBar from "../Navigation/NavBar.js"
import SearchBarLP from "../API/SuiviLaPoste.js"
import Mail from "../Mail/Mail.js"
import Mdvlist from '../MDV/mdv.js'
import Numsuivi from '../NumSuivi/Numsuivi.js'
import Statuscmd from '../StatusCMD/Statuscmd.js'
import ConfirmStatus from './ConfirmStatus.js';
import UpdateContactButton from './UpdateContactButton.js';
import UpdateContactForm from './UpdateContactForm.js';

import './Contact.css';

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
      id_mdv: '',
      MDVFromChildArray: '',
      MDVConverted: '',
      MDVConvertedville: ''
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
        this.setState({ id_mdv: id_mdv })
        this.displayMDV(id_mdv)
      })


  }

  GETMDVlistFromChild = () => {
    if (this.state.id_mdv != '') {
      var mdv = this.refs.mdvlist.SENDMDVList();
      this.setState({ MDVFromChildArray: mdv })
      var parsed = parseInt(this.state.id_mdv)
      parsed = parsed -= 1
      var parsedmdv = mdv[parsed].nom
      var parsedmdvVille = mdv[parsed].ville
      this.setState({ MDVConverted: parsedmdv })
      this.setState({ MDVConvertedville: parsedmdvVille })
    }

  }

  displayMDV(id) {

    if (id !== '') {

      document.getElementById('MDVlist').style.display = "none";
      this.GETMDVlistFromChild()
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
    if (value == 'pay??_MDV') {
      this.settextPmdv(value, name, mdv, id)
    }

    if (value == 'r??cup??r??') {

      this.settextRec(value, name, mdv, id)
    }

    if (value == 'Exp??di??') {

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
      "\n\nNous vous confirmons l'exp??dition de votre / vos lots du bordereau xxxx " +
      "sous le num??ro de suivi transporteur Colissimo La Poste suivant :  N?? de suivi = " + this.state.numsuivi +
      "\n\nVous pouvez suivre son acheminement sous le num??ro de suivi suivant " +
      "via le lien https://www.laposte.fr/outils/suivre-vos-envois " +
      "\n\nNous vous en souhaitons bonne r??ception," +
      "\n\nBien cordialement," +
      "\n\nSignature ES"
    var object = "Mise ?? jour de votre statut de commande ?? EXPEDIE"

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
      "\n\nNous allons nous rapprocher de la Maison " + mdv.nom + " ?? " + mdv.ville + " et organiser le retrait du bordereau XXXX en date du XXXX concern?? par votre demande." +
      "\n\n(nous vous rappelons que nous ne pouvons proc??der au retrait  qu'?? la condition de la r??ception de votre paiement par l'h??tel des ventes)." +
      "\n\nNous vous tiendrons inform?? du suivi de votre demande.Bien cordialement," +
      "\n\nSignature ES"
    var object = "Mise ?? jour de votre statut de commande"

    this.setState({ text: txt })
    this.setState({ object: object })
    console.log(object)
    console.log(txt)
    this.refs.mail.Confirm(object, txt);
  }

  settextRec(value, name, mdv, id) {

    var txt = "Bonjour Mme / Mr " + name + "," +
      "\n\nNous avons bien r??cup??r?? votre lot correspondant au Bordereau n??xxxx aupr??s de la maison de vente " + mdv.nom + " ?? " + mdv.ville +
      "\n\nNous allons nous proc??der ?? l'emballage de votre bien avec attention et  vous tiendrons inform?? de son exp??dition ou sa livraison." +
      "\n\nBien cordialement," +
      "\n\nSignature ES"
    var object = "Mise ?? jour de votre statut de commande ?? RECUPERE"

    this.setState({ text: txt })
    this.setState({ object: object })
    console.log(object)
    console.log(txt)
    this.refs.mail.Confirm(object, txt);
  }


  render() {

    const { state } = this.props.location
    console.log('teeeeeeeeeeeeeeeest', this.state.MDVFromChildArray)


    return (
      <div>
        <NavBar />
        <UpdateContactButton />
        <div id="ContactInfoBox">
          <h2>Informations</h2>
          <div id="ContactInfoBox3">
            <div id="ContactInfoBox2">
              <div>
                <strong>Id:</strong> {state.users.id}{" "}
              </div>
              <div>
                <strong>Pr??nom:</strong> {state.users.First_Name}{" "}
                <strong>Nom:</strong> {state.users.Last_Name}{" "}
              </div>
              <div>
                <strong>Email:</strong> {state.users.Email}{" "}
                <strong>tel:</strong> {state.users.Phone}{" "}
              </div>
              <div>
                <strong>Soci??t??:</strong> {state.users.Company}{" "}
                <strong>Cr???? le:</strong> {state.users.Created_At}{" "}
              </div>
            </div>
            <div id="ContactInfoBox4">
              <strong>Status Commande:</strong> {state.users.avancement_cmd}{" "}
              <strong>Maison de Vente:</strong> {this.state.MDVConverted}{"  - "} {this.state.MDVConvertedville}{" "}
              <strong>date de la derni??re activit??e:</strong> {state.users.Last_Activity_Date}{" "}
            </div>
          </div>
        </div>
        <div id="ContactInfoBox5">
          <div id="ContactInfoBox6">
            <h2>Adresse de facturation</h2>
            <div>
              <div>
                <strong>Rue:</strong> {state.users.Address_Street}{" "}
                <strong>Ville:</strong> {state.users.Address_City}{" "}
              </div>
              <div>
                <strong>Zip:</strong> {state.users.Address_Zip}{" "}
                <strong>Pays:</strong> {state.users.Address_State}{" "}
              </div>
            </div>
          </div>
          <div id="ContactInfoBox7">
            <h2>Adresse de livraison</h2>
            <div>
              <div>
                <strong>Adresse de livraison:</strong> {state.users.Adresse_de_livraison}{" "}
                <strong>Ville de livraison:</strong> {state.users.VILLE_LIVRAISON}{" "}
              </div>
              <div>
                <strong>Code postal de livraison:</strong> {state.users.Code_postal_LIVRAISON}{" "}
                <strong>Pays de livraison:</strong> {state.users.PAYS_LIVRAISON}{" "}
              </div>
            </div>
          </div>
        </div>
        <div>
          <Mdvlist onSelectMdv={this.handleMdv}
            ref="mdvlist"
            userid={state.users.id} />
        </div>
        <div>
          <select onChange={(e) => this.ChangeStatus(e.target.value, state.users.Last_Name, this.state.mdv, state.users.id)}>
            <option value="dafault">choississez un status</option>
            <option value="pay??_MDV">pay?? MDV</option>
            <option value="r??cup??r??">r??cup??r??</option>
            <option value="Exp??di??">Exp??di??</option>
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
        <UpdateContactForm
          ref="updatecontact"
          contact={state.users}
        />
      </div>
    );
  }
}

export default ViewContactDetails
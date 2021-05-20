import React, { Component } from 'react';
import { useLocation, Link } from "react-router-dom";

import NavBar from "../Navigation/NavBar.js"
import SearchBarLP from "../API/SuiviLaPoste.js"
import Mail from "../Mail/Mail.js"

class ViewContactDetails extends Component {
  constructor() {
    super();
    this.state = {
      user : [],
      object: '',
      text: ''
    };
  }

  ChangeStatus(value, name){
    console.log('status :', value)

    var txt = ""
    if(value == 'payé_MDV'){
      var txt = "Bonjour Mr " + name + "," + 
        "\nNous vous remercions pour votre paiement et votre confiance." + 
        "\nNous allons nous rapprocher de la Maison xxxx et organiser le retrait du bordereau XXXX en date du XXXX concerné par votre demande." + 
        "\n(nous vous rappelons que nous ne pouvons procéder au retrait  qu'à la condition de la réception de votre paiement par l'hôtel des ventes)," +
        "\nNous vous tiendrons informé du suivi de votre demande.Bien cordialement," + 
        "\nSignature ES"
      var object = "status updated to payé MDV"
    }

    if(value == 'récupéré'){
      var txt = "Bonjour Mr " + name + "," + 
        "\nNous avons bien récupéré votre lot correspondant au Bordereau n°xxxx auprès de la maison de vente xxxx," + 
        "\nNous allons nous procéder à l'emballage de votre bien avec attention et  vous tiendrons informé de son expédition ou sa livraison." + 
        "\nBien cordialement," + 
        "\nSignature ES"
      var object = "status updated to récupéré"
    }

    if(value == 'En_cour_de_traitement'){
      var txt = 'traitement txt'
      var object = "status updated to en cour de traitement"
    }

    if(value == 'Expédié'){
      var txt = "Bonjour Mr, " + name + "," + 
        "\nNous vous confirmons l'expédition de votre / vos lots du bordereau xxxx " + 
        "sous le numéro de suivi transporteur Colissimo La Poste suivant :  N° de suivi =  8A00054163416" + 
        "\nVous pouvez suivre son acheminement sous le numéro de suivi suivant " + 
        "via le lien https://www.laposte.fr/outils/suivre-vos-envois?code=8A00054163416 (entête colonne NOSUIVI)" + 
        "\nNous vous en souhaitons bonne réception," + 
        "\nBien cordialement,Signature ES"
      var object = "status updated to expédié"
    }

    this.setState({text: txt})
    this.setState({object: object})
    console.log(object)
    console.log(txt)
    
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
            <select  onChange={(e) => this.ChangeStatus(e.target.value, state.users.Last_Name)}>
                <option value="dafault">choississez un status</option>
                <option value="payé_MDV">payé MDV</option>
                <option value="récupéré">récupéré</option>
                <option value="En_cour_de_traitement">En cours de traitement</option>
                <option value="Expédié">Expédié</option>
              </select>
        </div>
        <SearchBarLP />
        <Mail 
          mail={state.users.Email}
          object = {this.state.object}
          text = {this.state.text}
        />
      </div>
);
  }
}

export default ViewContactDetails
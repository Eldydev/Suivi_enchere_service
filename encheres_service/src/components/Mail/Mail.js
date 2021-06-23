import React, { Component } from 'react';
import Statuscmd from '../StatusCMD/Statuscmd.js'
import './Mail.css';

class Mail extends Component {
    constructor(props) {
      super(props);
      this.state = {
          mail: "",
          to:'aurelien@spatiality.fr',
          subject:'',
          text:'',
          id: this.props.userid
      };
    }

Confirm(object, text){
  this.setState({subject: object})
  this.setState({text: text})
  document.querySelector(".ConfirmPopup").style.display = "block"
}

SendMail(){
  var mail = this.props.mail
  var status = this.props.status
  console.log("mail is :",mail)

  var objet = this.state.subject
  var text = this.state.text
  text = text.replaceAll('\n', '<br>')
  console.log('test : ', text)
  
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({ 
            to: this.state.to,
            subject: objet,
            text: text})
    };
    fetch('https://api.suivi-encheres-services.fr/v1/text-mail', requestOptions)
    .then (console.log('body: ',requestOptions))
        .then(response => response.json())
        .then(data => console.log(data))
        document.querySelector(".ConfirmPopup").style.display = "none"
        this.UpdateUserStatus(status)
}

UpdateUserStatus(status){
  var id = this.state.id
  this.refs.statuscmd.UpdateStatus(status, id);
}

Cancel(){
  document.querySelector(".ConfirmPopup").style.display = "none"
}

    render() {
      return (
        <div>
          <div className="ConfirmPopup">
            <p>etes vous sûr de vouloir envoyer le mail ?</p>
            <p>à {this.props.mail}</p>
            <p>objet : {this.state.subject}</p>
            <p>texte : {this.state.text}</p>
            <button onClick={(e) => this.SendMail()}>ENVOYER</button>
            <button onClick={(e) => this.Cancel()}>ANNULER</button>
          </div>
          <div>
            <Statuscmd
            ref="statuscmd" />
          </div>
        </div>
      );
    }
  }

  export default Mail
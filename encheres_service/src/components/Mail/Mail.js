import React, { Component } from 'react';
import './Mail.css';

class Mail extends Component {
    constructor() {
      super();
      this.state = {
          mail: "",
          to:'aurelien@spatiality.fr',
          subject:'',
          text:''
      };
    }

Confirm(object, text){
  this.setState({subject: object})
  this.setState({text: text})
  document.querySelector(".ConfirmPopup").style.display = "block"
}

SendMail(){
  var mail = this.props.mail
  console.log("mail is :",mail)

  var objet = this.state.subject
  var text = this.state.text
  
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
}

Cancel(){
  document.querySelector(".ConfirmPopup").style.display = "none"
}

    render() {
      return (
        <div>
          <div>
            <p>{this.props.mail}</p>
              <button onClick={(e) => this.Confirm(this.props.object, this.props.text)}>Mail</button>
          </div>
          <div className="ConfirmPopup">
            <p>etes vous sûr de vouloir envoyer le mail ?</p>
            <p>à {this.props.mail}</p>
            <p>objet : {this.state.subject}</p>
            <p>texte : {this.state.text}</p>
            <button onClick={(e) => this.SendMail()}>SEND</button>
            <button onClick={(e) => this.Cancel()}>CANCEL</button>
          </div>
        </div>
      );
    }
  }

  export default Mail
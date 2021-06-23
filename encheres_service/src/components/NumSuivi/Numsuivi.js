import React, { Component } from 'react';
import Mail from "../Mail/Mail.js"
import Statuscmd from '../StatusCMD/Statuscmd.js';
import './Numsuivi.css';


class Numsuivi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: "",
      id: this.props.userid,
      status: this.props.cmd
    };
  }

  componentDidMount() {
    var cmd = this.state.status
    if (cmd === 'récupéré') {
      this.EnterNum()
    }
  }

  EnterNum() {
    document.querySelector(".SuiviNumBox").style.display = "block"
  }

  SetNumber(value) {
    this.setState({ num: value })
  }

  UpdateNumber() {
    console.log('number :', this.state.num)
    console.log('id :', this.state.id)
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        num: this.state.num,
        id: this.state.id
      })
    };
    fetch('https://api.suivi-encheres-services.fr/v1/update-number', requestOptions)
      .then(console.log('body: ', requestOptions))
      .then(response => response.json())
      .then(data => console.log(data))
    this.hidebox()
  }

  hidebox() {
    document.querySelector(".SuiviNumBox").style.display = "none"
  }

  render() {
    return (
      <div className="SuiviNumBox">
        <label for="number">Entrez le numero de suivi :</label>
        <input type='text' onChange={(e) => this.SetNumber(e.target.value)}></input>
        <button onClick={(e) => this.UpdateNumber()}>Valider</button>
      </div>
    );
  }
}

export default Numsuivi
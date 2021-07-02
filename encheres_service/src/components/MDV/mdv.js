import React, { Component } from 'react';
import { useLocation, Link } from "react-router-dom";

import './mdv.css';

class Mdvlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      MDVArray: [],
      id: this.props.userid
    };
  }

  componentDidMount() {
    fetch('https://api.suivi-encheres-services.fr/mdvlist')
      .then(res => res.json())

      .catch(error => console.error('Error: ', error))

      .then(response => {
        console.log('Success: ', response)
        console.log(response.rows)
        this.setState({
          MDVArray: response.rows
        })
      });
    this.MDVMapping()
    this.SENDMDVList()
  }

  SENDMDVList() {
    var mdvlist = this.state.MDVArray
    return mdvlist;
  }

  handleMdvChange = (value) => {
    console.log('mdv.js : ', value)
    var mdv = this.state.MDVArray[value - 1];
    this.props.onSelectMdv(mdv);
    this.setmdv(mdv)
  }

  setmdv(mdv){
    console.log('setmdv : mdv : ', mdv)
    var mdv = mdv.id
    var id = this.state.id
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: id,
        mdv: mdv
      })
    };
    fetch('https://api.suivi-encheres-services.fr/v1/update-mdv', requestOptions)
      .then(console.log('body: ', requestOptions))
      .then(res => res.json())
      .catch(error => console.error('Error: ', error))
      .then(response => {
        console.log('Success: ', response)
      })
  }

  MDVMapping() {
    var data = this.state.MDVArray
    console.log('mdv : ', data)
    return (

      <div className="" >
        <select onChange={(e) => this.handleMdvChange(e.target.value)}>
          <option>choisissez une maison de vente</option>
          {data.map((data, i) => {
            return (
              <option key={i} value={data.id}>{data.nom} - {data.ville} - {data.designation}</option>
            )
          })}
        </select>
      </div>
    )
  }


  render() {
    return (
      <div id="MDVlist">
        {this.MDVMapping()}
      </div>
    );
  }
}

export default Mdvlist
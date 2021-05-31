import React, { Component } from 'react';
import { useLocation, Link } from "react-router-dom";

import './mdv.css';

class Mdvlist extends Component {
    constructor() {
      super();
      this.state = {
        MDVArray: []
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
  }

  handleMdvChange = (value) => {
    var mdv = this.state.MDVArray[value];
    this.props.onSelectMdv(mdv);            
}

  MDVMapping(){
    var data = this.state.MDVArray
    console.log('mdv : ', data)
    return(

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
          <div>
            {this.MDVMapping()}
          </div>
      );
    }
  }

  export default Mdvlist
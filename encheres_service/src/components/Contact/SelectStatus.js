import React, { Component } from 'react';


class SelectStatus extends Component {
    constructor() {
      super();
      this.state = {
          status: "",
      };
    }

    ChangeStatus(value){
      this.setState({status: value})
    }

    render() {
      console.log('status : ', this.state.status)
      return (
        <div>
            <select  onChange={(e) => this.ChangeStatus(e.target.value)}>
                <option value="payé_MDV">payé MDV</option>
                <option value="récupéré">récupéré</option>
                <option value="En_cour_de_traitement">En cours de traitement</option>
                <option value="Expédié">Expédié</option>
              </select>
        </div>
      );
    }
  }

  export default SelectStatus
import React, { Component } from 'react';
import axios from 'axios';

import { useLocation, Link } from "react-router-dom";
import NavBar from '../Navigation/NavBar.js';

import './SuiviLaPoste.css';

class SearchBarLP extends Component {
    constructor() {
      super();
      this.state = {
          code: "",
          data: []
      };
    }

    setCode(code) {
        this.setState({code: code})   
    }

   async SearchCode(code) {

        console.log("code :", code)
        await fetch('https://api.suivi-encheres-services.fr/suivilaposte/?code=' + code)
        .then(res => res.json())

        .catch(error => console.error('Error: ', error))

        .then(response => {
            console.log('Success: ', response)
            this.setState({data: response})
        });

        this.MapData()
    }

    MapData(){
      //6T11111111110
      console.log('data : ', this.state.data)
      if (this.state.data.length !== 0) {
        var data = this.state.data.body.shipment
        const event = data.event
        const timeline = data.timeline
        var delivery = ""
        var recup = ""
        var i = ""
        console.log(data)
        if (data.isFinal == true){
          var delivery = "oui"
        }
        else {
          var delivery = "non"
        }

        /*if(data.contextData.removalPoint){
          if (data.contextData.removalPoint.type.isPickUp == true){
            var recup = "oui"
          }
          else {
            var recup = "non"
          }
        }*/


        for (i=0; i< timeline.length; i++){
          console.log(" i : ", i)
          console.log("fff :", timeline[i].status)
          if(timeline[i].status == true){
            var time = timeline[i].shortLabel
            console.log('yesy :', time)
          }
        }
        return(
          <div>
            <p>Numero Suivi : {data.idShip}</p>
            <p>Type : {data.product}</p>
            <p>livré : {delivery}</p>
            <p>Status : {time}</p>
            <p>le : {data.deliveryDate}</p>
            <p>recupéré : {recup}</p>
            <p>hsitorique : </p>
            <div className="" >
                            {event.map((event, i) => {
                                return (
                                    <div className='' key={i}>
                                        <p>date : {event.date}</p>
                                        <p>commentaire : {event.label}</p>
                                    </div>
                                )
                            })}
                        </div>
          </div>
        )
      }
      
    }

    render() {
      return (
        <div>
          <NavBar />
            <div>
                <input 
                    placeholder={"code de suivi"}
                    onChange={(e) => this.setCode(e.target.value)}
                />
            </div>
            <div>
                <button onClick={(e) => this.SearchCode(this.state.code)}>Search</button>
            </div>
            <div>
            {this.MapData()}
            </div>
        </div>
      );
    }
  }

  export default SearchBarLP
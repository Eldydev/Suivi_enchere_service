import React, { Component } from 'react';
import axios from 'axios';

import { useLocation, Link } from "react-router-dom";

import './SuiviLaPoste.css';

class SearchBarLP extends Component {
    constructor() {
      super();
      this.state = {
          code: ""
      };
    }

    setCode(code) {
        this.setState({code: code})   
    }

    SearchCode(code) {
        const headers = { 
            'Accept': 'application/json',
            'X-Okapi-Key': '3JjphFmg4VUo72z5JrQI8m0AIp00nNHXmbKTusLQDuHiaDt4MxlbSKojOyywXlBM',
            /*µAccess-Control-Allow-Origin: '*',*/
    
    }
        console.log("code :", this.state.code)
        fetch('https://api.laposte.fr/suivi/v2/idships/1A00915820380', {headers} )
        .then(res => res.json())

        .catch(error => console.error('Error: ', error))

        .then(response => {
            console.log('Success: ', response)
        });
    }

    test() {

        console.log('test fucntion')

        axios.get("https://api.laposte.fr/suivi/v2/idships/1A00915820380", { headers: {
            'Accept': 'application/json',
            'X-Okapi-Key': '3JjphFmg4VUo72z5JrQI8m0AIp00nNHXmbKTusLQDuHiaDt4MxlbSKojOyywXlBM'

        }})
  .then((res) => {
    console.log(res)
  })
  .catch((error) => {
    console.log(error)
  })
    }

    render() {
      return (
        <div>
            <div>
                <input 
                    placeholder={"code de suivi"}
                    onChange={(e) => this.setCode(e.target.value)}
                />
            </div>
            <div>
                <button onClick={(e) => this.SearchCode(this.state.code)}>Search</button>
            </div>
        </div>
      );
    }
  }

  export default SearchBarLP
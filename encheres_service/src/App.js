import React, { useState } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import './App.css';
import Login from './components/Login/Login.js';
import Dashboard from './components/Dashboard/Dashboard.js';
import Preferences from './components/Preferences/Preferences.js';
import Contact from './components/Contact/Contact.js';
import ViewContactDetails from './components/Contact/ViewContactDetails.js'
import Mail from './components/Mail/Mail.js'
import SearchBarLP from './components/API/SuiviLaPoste.js'
import Mdvlist from './components/MDV/mdv.js'
import Numsuivi from './components/NumSuivi/Numsuivi.js'
import Callback from './Callback';
import Home from './Home.js';

function App() {

  return (
    <div className="App">
    <h1>Application</h1>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} exact />
        <Route exact path='/callback' component={Callback} exact /> 
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/preferences">
          <Preferences />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/mail">
          <Mail />
        </Route>
        <Route path="/suivicoli">
          <SearchBarLP />
        </Route>
        <Route path="/mdvlist">
          <Mdvlist />
        <Route path="/numsuivi">
          <Numsuivi />
        </Route>
          
        </Route>
        <Route
          exact
          path="/view-contact-details/:id"
          component={ViewContactDetails}
        />
      </Switch>
    </BrowserRouter>
  </div>
  );
}

export default App;
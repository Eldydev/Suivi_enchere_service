import React, { useState } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import './App.css';
import Login from './components/Login/Login.js';
import Dashboard from './components/Dashboard/Dashboard.js';
import Preferences from './components/Preferences/Preferences.js';
import Contact from './components/Contact/Contact.js';
import ViewContactDetails from './components/Contact/ViewContactDetails.js'
import Mail from './components/Mail/Mail.js'
import useToken from './useToken.js';

function App() {
    const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

  if (token){
    <Redirect to={{pathname: "/contact"}} />
  }
  
  return (
    <div className="wrapper">
    <h1>Application</h1>
    <BrowserRouter>
      <Switch>
      <Route exact path="/">
          <Dashboard />
        </Route>
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
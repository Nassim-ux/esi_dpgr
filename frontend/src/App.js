//import logo from "./images/logo.svg";
import "./App.css";
import React, { Component } from "react";
import { Redirect, BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Login from "./components/Login";

class App extends Component {
  state = {
    login: true,
  };

  resetState = (s) => {
    this.setState(() => ({
      login: s,
    }));
  };

  render() {
    return (
      <BrowserRouter>
        <Route exact path="/">
          <Redirect exact from="/" to="login" />
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/home">
          <Home resetState={this.resetState}></Home>
        </Route>
      </BrowserRouter>
    );
  }
}

export default App;

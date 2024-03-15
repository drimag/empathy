import React, { Component } from "react";
import { render } from "react-dom";
import HomePage from "./HomePage";
import NavBarTop from "./NavBarTop";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    //return <NavBar />;
    return (
      <div style={{ width: '100%'}}>
        <NavBarTop  />
        <HomePage />
      </div>
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);
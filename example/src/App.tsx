import React, { Component } from "react";
import { List } from "react-list-lib";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <List text="Hello" />
      </div>
    );
  }
}

export default App;

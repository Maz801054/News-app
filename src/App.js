import "./App.css";

import React, { Component } from "react";

import Navbar from "./Componants/Navbar";
import News from "./Componants/News";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <News pageSize={5} />
      </div>
    );
  }
}

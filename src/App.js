import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My travels</h1>
        </header>
        <Travel
          destination="Bonifacio"
          country="France"
          photo="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Bonifacio_vieille_ville_marine.jpg/1200px-Bonifacio_vieille_ville_marine.jpg"
          distance="1480kms"
        />
        <Travel
          destination="République Dominicaine"
          country="Grandes Antilles"
          photo="https://back-carrefour.orchestra-platform.com/admin/TS/fckUserFiles/Image/B2C/header_hp/1920x550_destination_republique_dominicaine_punta_cana_plage.jpg"
          distance="7229kms"
        />






      </div>
    );
  }
}

export default App;
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import {BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to GoogleBooks App</h2>
      </div>
      <Router>
        <NavBar />
        <Route exact path="/" component={Search} />
        <Route exact path="/Search" component={Search} />
        <Route exact path="/Saved" component={Saved} />
      </Router>
    </div>
  );
}


export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Nav from "./components/Nav";
import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <Router>
      <div>
        <Nav/>
        <Switch>
          <Route exact path = "/" component = {Search} />
          <Route exact path = "/search" component = {Search} />
          <Route exact path = "/saved" component = {Saved} />
          <Route component = {NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

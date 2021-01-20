import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login/Login';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ItemList from "./Items/ItemList";

class App extends Component {
  
  
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact component={Login}></Route>
            <Route path="/ItemList" exact component={ItemList}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

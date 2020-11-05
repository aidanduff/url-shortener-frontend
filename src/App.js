import React from 'react';
import Home from "./components/home";
import About from "./components/about";
import BottomNav from './components/bottomNav';
import Jumbotron from './components/jumbotron';
import { Route, Redirect, Switch } from "react-router-dom";
import Navbar from './components/navbar';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Jumbotron />
       <Switch>
       <Route path="/about" component={About}></Route>
          <Route path="/home" component={Home}></Route>
          
          {/* <Redirect from="/" exact to="/home" /> */}
          <Redirect to="/not-found" />
        </Switch>
       <BottomNav />
       </React.Fragment>
  );
}

export default App;

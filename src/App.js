import React from 'react';
import Home from "./components/home";
import BottomNav from './components/bottomNav';
import Jumbotron from './components/jumbotron';
import Navbar from './components/navbar';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Jumbotron />
       <Home />
       <BottomNav />
       </React.Fragment>
  );
}

export default App;

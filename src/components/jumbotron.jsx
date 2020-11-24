import React from 'react'
import Logo from './logo';


const Jumbotron = () => {
    return ( 
        <div className="jumbotron " style={{ backgroundColor: "#f88642" }}>
        <div className="container mt-4">
          <p className="row"><Logo /></p>
          <h2>Welcome to Skweezit!</h2>
          <h4>Enter your long link in the field below and hit the skweez button to obtain a shortened link.</h4><br></br>
        </div>
      </div>
     );
}
 
export default Jumbotron;
import React from 'react'
import Logo from './logo';


const Jumbotron = () => {
    return ( 
        <div className="jumbotron " style={{ backgroundColor: "#f88642" }}>
        <div className="container">
          <p className="row"><Logo /></p>
          {/* <h1 className="display-3 row">Hello, world!</h1> */}
          <h2>Welcome to Skweezit!</h2>
          <h4>Enter your long link in the field below and hit the skweez button to obtain a shortened link.</h4><br></br>
          <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more &raquo;</a></p>
        </div>
      </div>
     );
}
 
export default Jumbotron;
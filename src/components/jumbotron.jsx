import React from 'react'
import Logo from './logo';


const Jumbotron = () => {
    return ( 
        <div className="jumbotron" style={{ backgroundColor: "#f88642" }}>
        <div className="container">
          <Logo />
          <h1 className="display-3">Hello, world!</h1>
          <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
          <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more &raquo;</a></p>
        </div>
      </div>
     );
}
 
export default Jumbotron;
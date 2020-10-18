import React, { Component } from 'react'

class Output extends Component {
    state = {  }

    render() { 
        return ( 

      <div className="alert alert-dark" role="alert">
      A simple dark alert with <a href="www.google.com" className="alert-link">an example link</a>. Give it a click if you like.
    </div>

      );
    }
}
 
export default Output ;
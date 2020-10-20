import React, { Component } from 'react'

class Output extends Component {
    state = {  }

    render(props) { 
      const shortenedUrl = this.props.shortenedUrl;
        return ( 

      <div className="alert alert-dark" role="alert">
      A simple dark alert with <a href={shortenedUrl} className="alert-link">an example link</a>. Give it a click if you like.
    </div>

      );
    }
}
 
export default Output ;
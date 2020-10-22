import React, { Component } from 'react'

class Output extends Component {
    state = {  }

    render(props) { 
      const shortenedUrl = this.props.shortenedUrl;
      if (shortenedUrl.length <= 2) return null;
        return ( 

      <div className="alert alert-dark" role="alert">
      <a href={shortenedUrl} className="alert-link">{shortenedUrl}</a>
    </div>

      );
    }
}
 
export default Output ;
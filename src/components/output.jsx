import React, { Component } from 'react'

class Output extends Component {
    state = {  }

    render(props) { 
      const shortenedUrl = this.props.shortenedUrl;
      if (shortenedUrl.length <= 2) return null;
        return ( 

      // <div className="alert alert-dark" role="alert" >
      <div className="p-3 mb-2 bg-info text-white">
      <a href={shortenedUrl} className="alert-link">{shortenedUrl}</a>
      {/* <div> */}
          <button onClick={() => {navigator.clipboard.writeText(shortenedUrl)}} className="btn btn-success float-right mb-2">
            Copy to Clipboard
          </button>
        {/* </div> */}
    </div>

      );
    }
}
 
export default Output ;
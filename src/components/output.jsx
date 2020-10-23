import React, { Component } from 'react'

class Output extends Component {
    state = {  }

    render(props) { 
      const shortenedUrl = this.props.shortenedUrl;
      if (shortenedUrl.length <= 2) return null;
        return ( 

      // <div className="alert alert-dark" role="alert" >
      <div className="p-3 mb-2 bg-light text-dark row align-items-center">
      <a href={shortenedUrl} className="alert-link col-9">{shortenedUrl}</a>
      {/* <div> */}
          <button onClick={() => {navigator.clipboard.writeText(shortenedUrl)}} className="btn btn-success float-right mb-2 col-3">
            Copy to Clipboard
          </button>
        {/* </div> */}
    </div>

      );
    }
}
 
export default Output ;
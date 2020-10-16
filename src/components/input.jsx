import React, { Component } from 'react'

class  Input extends Component {
    state = {  }
    render() { 
        return ( <div className="input-group mb-3 mt-3">
        <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Enter your URL" aria-describedby="button-addon2"/>
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="button" id="button-addon2">Squeeze it!</button>
        </div>
      </div> );
    }
}
 
export default Input ;
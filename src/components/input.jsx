import React, { Component } from 'react'

class  Input extends Component {
    state = { input : '' }

    handleChange = (e) => {
        this.setState({input: e.target.value});
    }

    handleClick = (e) => {
        console.log(this.state.input);
    }
    render() { 
        return ( 
        <div className="input-group mb-3 mt-3">
        <input type="text" className="form-control" placeholder="Enter your URL" aria-label="Enter your URL" aria-describedby="button-addon2" onChange={this.handleChange}/>
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={this.handleClick}>Squeeze it!</button>
        </div>
      </div> 
      );
    }
}
 
export default Input ;
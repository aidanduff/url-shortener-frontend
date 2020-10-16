import React, { Component } from 'react';
import Input from "./input";
import Output from "./output";

class Home extends Component {
    state = {  }
    render() { 
        return ( 
        <React.Fragment>
            <Input /> 
            <Output />
        </React.Fragment>);
    }
}
 
export default Home;
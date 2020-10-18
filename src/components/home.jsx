import React, { Component } from 'react';
import Input from "./input";
import Output from "./output";

class Home extends Component {
    state = { originalUrl: '' }

    setOriginalUrl = (e) => {
        console.log('clicked ' + this.state.originalUrl);
    }

    changeOriginalUrl = (e) => {
        console.log("change " + e.currentTarget.value);
        // this.setState({originalUrl: e.target.value});
    }
    render() { 
        return ( 
        <React.Fragment>
            <Input onUrlEntry={this.setOriginalUrl}
            onURLChange={this.changeOriginalUrl}/> 
            <Output />
        </React.Fragment>);
    }
}
 
export default Home;
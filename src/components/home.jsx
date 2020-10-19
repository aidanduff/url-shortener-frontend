import React, { Component } from 'react';
import http from "../services/httpService";
import axios from "axios";
import Input from "./input";
import Output from "./output";

class Home extends Component {
    state = { originalUrl: '' }

    setOriginalUrl = (e) => {
        console.log('clicked ' + this.state.originalUrl);
        this.handleAdd(this.state.originalUrl);
    }

    handleAdd = async (string) => {
        // const response = await http.post('http://localhost:8080/squeezer', string);
        // console.log(response.data);

        const config = {
            headers: {
              "content-type": "text/html",
            },
          };
          const response = await http.post('http://localhost:8080/squeezer', string, config);

          console.log(response.data);
    
      };

    // localhost:8080/squeezer

    changeOriginalUrl = (e) => {
        console.log("change " + e.currentTarget.value);
        this.setState({originalUrl: e.target.value});
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
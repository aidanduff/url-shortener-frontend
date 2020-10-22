import React, { Component } from 'react';
import http from "../services/httpService";
import Input from "./input";
import Output from "./output";

class Home extends Component {
    state = { originalUrl: '', 
              shortenedUrl: ''
            }

    setOriginalUrl = (e) => {
        console.log('clicked ' + this.state.originalUrl);
        this.handleAdd(this.state.originalUrl);
    }

    handleAdd = async (string) => {
        const config = {
            headers: {
              "content-type": "text/html",
            },
          };
          const response = await http.post('http://localhost:8080/squeezer', string, config);

          this.setState({shortenedUrl: response.data.shortenedURL })

          console.log(this.state.shortenedUrl);
    
      };

    changeOriginalUrl = (e) => {
        console.log("change " + e.currentTarget.value);
        this.setState({originalUrl: e.target.value});
    }
    render() { 
        return ( 
        <React.Fragment>
            <Input onUrlEntry={this.setOriginalUrl}
            onURLChange={this.changeOriginalUrl}/> 
            <Output shortenedUrl={this.state.shortenedUrl}/>
        </React.Fragment>);
    }
}
 
export default Home;
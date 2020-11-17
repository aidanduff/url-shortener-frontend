import React, { Component } from 'react';
import http from "../services/httpService";
import Input from "./input";
import Output from "./output";

class Home extends Component {
    state = { originalUrl: '', 
              shortenedUrl: ''
            }
    
    componentDidMount(){
        http.get('https://skweezit-server.herokuapp.com/').then((response) =>
            {
                console.log("response");
            });
    }

    setOriginalUrl = (e) => {
        this.handleAdd(this.state.originalUrl);
    }

    wakeServer = async () => {
        await http.get('https://skweezit-server.herokuapp.com/'); //Wake up sleeping Heroku server immediately
        console.log("in wakeServer");

    }

    handleAdd = async (string) => {
        const config = {
            headers: {
              "content-type": "text/html",
            },
          };
          const response = await http.post('https://skweezit-server.herokuapp.com/home', string, config);
          this.setState({shortenedUrl: response.data.shortenedURL });
      };

    changeOriginalUrl = (e) => {
        this.setState({originalUrl: e.target.value});
    }
    render() { 
        return ( 
        <React.Fragment>
            <div className="container p-3 mb-2 bg-dark text-white">
            <Input onUrlEntry={this.setOriginalUrl}
            onURLChange={this.changeOriginalUrl}/> 
            <Output shortenedUrl={this.state.shortenedUrl}/>
            </div>
        </React.Fragment>);
    }
}
 
export default Home;
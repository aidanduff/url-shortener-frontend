import React, { Component } from 'react';
import http from "../services/httpService";
import Input from "./input";
import Output from "./output";
import Logo from "./logo";
import BottomNav from './bottomNav';
import Jumbotron from './jumbotron';
import Navbar from './navbar';

class Home extends Component {
    state = { originalUrl: '', 
              shortenedUrl: ''
            }

    setOriginalUrl = (e) => {
        this.handleAdd(this.state.originalUrl);
    }

    handleAdd = async (string) => {
        const config = {
            headers: {
              "content-type": "text/html",
            },
          };

          const response = await http.post('http://localhost:8080/skweez.it', string, config);
          this.setState({shortenedUrl: response.data.shortenedURL });
      };

    changeOriginalUrl = (e) => {
        console.log("change " + e.currentTarget.value);
        this.setState({originalUrl: e.target.value});
    }
    render() { 
        return ( 
        <React.Fragment>
            <Navbar />
            <Jumbotron />
            {/* <Logo /> */}
            <div className="container p-3 mb-2 bg-dark text-white">
            <Input onUrlEntry={this.setOriginalUrl}
            onURLChange={this.changeOriginalUrl}/> 
            <Output shortenedUrl={this.state.shortenedUrl}/>
            </div>
            <BottomNav />
        </React.Fragment>);
    }
}
 
export default Home;
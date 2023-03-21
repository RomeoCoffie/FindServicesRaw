import React, { Component } from 'react';
import './App.css';
import Homepage from './Findservice_components/Homepage_components/Find_home'

class App extends Component {
    render() {
        return ( 
          <div className = "App" >
            <Homepage />
          </div>
        );
    }
}

export default App;
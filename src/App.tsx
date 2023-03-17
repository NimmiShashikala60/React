import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
// class based
  componentDidMount():void{
    console.log("Hii");
  }
  render():React.ReactNode{
    return (
      <div className="App">
        <h1>Shashi App</h1>
      </div>
    );
  }

  
}



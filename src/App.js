import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Newcomponent from "./newcomponent";

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      text: "text",
      boolean: false
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p >
            Edit <code>src/App.js</code> and save to reload.
          </p>
          {this.state.boolean===true && <Newcomponent {...this.props} {...this.state}/>}
          <button
            onClick={()=>this.onChange()}
          >
            Alert Box
          </button>
          
        </header>
      </div>
    );
  }

  onChange(){
    this.setState({
      boolean: !this.state.boolean
    });
  }
}

export default App;

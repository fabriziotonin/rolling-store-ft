import React, { Component } from 'react';
import './App.css';
import { Button } from 'antd' 
import Main from './Components/Main';

class App extends Component {
constructor(props) {
  super(props)

  this.state = {
     userName: 'Fabrizio'
  }
}
  render(){
    const {userName} = this.state

    return (
      <main className="App">
        <header className="App-container">
        <Main userName={userName}/>
        </header>
      </main>
    );
  }
}

export default App;

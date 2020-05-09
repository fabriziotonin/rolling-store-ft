import React, { Component } from 'react';
import './App.css';
import { Button } from 'antd' 
import Main from './Components/Main';

class App extends Component {
constructor(props) {
  super(props)

  this.state = {
     userName: 'Fabrizio',
     products: [
       {
         id: 'prod01',
         name: 'nootebook',
         brand: 'Asus',
         price: 19000
       },
       {
        id: 'prod02',
        name: 'Televisor',
        brand: 'Samsung',
        price: 35400
      },
      {
        id: 'prod03',
        name: 'juego de ps4',
        brand: 'Dark Souls',
        price: 1900
      },
     ]
  }
}
  render(){
    const {userName, products} = this.state

    return (
      <main className="App">
        <header className="App-container">
        <Main userName={userName} products={products}/>
        </header>
      </main>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import { Button } from 'antd'
import Main from './Components/Main';
import Results from './Components/Results';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
  render() {
    const { userName, products } = this.state

    return (
      <Router>
        <Switch>
          <Route path="/results">
            <div className="App-container">
              <Results userName={userName} products={products} />
            </div>
          </Route>
          <Route path="/">
            <div className="App-container">
              <Main userName={userName} products={products} />
            </div>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;


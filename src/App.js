import React, { Component } from 'react';
import './App.css';
import logo from "./logo.png";
import { Layout, Input, Row, Col } from 'antd';
import { Redirect } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Main from './Components/Main/Main';
import Results from './Components/Results/Results';
import Product from './Components/Product/Product';
import Cart from './Components/Cart/Cart';
import Success from './Components/Success/Success';
const { Header, Footer } = Layout;
const { Search } = Input;

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
          price: 25000
        },
        {
          id: 'prod04',
          name: 'nootebook',
          brand: 'Lenovo',
          price: 29000
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
          price: 1450
        },
        {
          id: 'prod05',
          name: 'Heladeras',
          brand: 'Heladera: whirlpool 16000W ',
          price: 49000
        },
        {
          id: 'prod06',
          name: 'Auriculares',
          brand: 'SteelSeries White Artic',
          price: 19000
        },
      ],
      results: [],
      term: '',
      redirect: false
    }
  }

  updateTerm(term) {
    this.setState({ term })
  }

  updateList(newList, term) {
    const { products } = this.state;
    term !== '' ?
      this.setState({
        results: newList,
        term
      }) :
      this.setState({ results: products })
  }


  setRedirect = () => {
    this.setState({
      redirect: true
    });
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/results" />
    }
  }

  handleChange = (e) => {
    let term = e.target.value;
    this.updateTerm(term);
  }

  handleSearch = (term) => {
    let currentProducts = [];
    let newProducts = [];

    if (term !== '') {
      currentProducts = this.state.products;
      newProducts = currentProducts.filter(item => {
        const lc = item.name.toLowerCase();
        const filter = term.toLowerCase();
        return lc.includes(filter)
      })
      this.updateList(newProducts, term);
    } else {

      this.state.results = this.state.products;
    }
    this.setRedirect();
  }


  render() {
    const { userName, products, term, results } = this.state
    const updateTerm = this.updateTerm.bind(this);
    const updateList = this.updateList.bind(this);

    return (
      <Router>
        <Header className="header">
          <Row>
            <Col xs={{ span: 7 }} lg={{ span: 3 }}>
              <Link to="/">
                <img src={logo} className="header-logo" alt="logo" />
              </Link>
            </Col>
            <Col xs={{ span: 17 }} lg={{ span: 16 }}>
              <div className="header-search">
                {this.renderRedirect()}
                <Search
                  placeholder="Que vas a Comprar hoy"
                  onSearch={this.handleSearch}
                  onChange={this.handleChange}
                  enterButton
                />
              </div>
            </Col>
            <Col xs={{ span: 0 }} lg={{ span: 5 }}>
              <div className="header-greetings">
                Bienvenido {userName}
              </div>
            </Col>
          </Row>
        </Header>
        <Switch>
          <Route path="/results">
            <div className="App-container">
              <Results
                userName={userName}
                results={results}
                products={products}
                updateTerm={updateTerm}
                updateList={updateList}
              />
            </div>
          </Route>
          <Route path="/product">
            <Product />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/success">
            <Success />
          </Route>
          <Route path="/">
            <div className="App-container">
              <Main
                userName={userName}
                products={products}
                updateTerm={updateTerm}
                term={term}
                updateList={updateList}
              />
            </div>
          </Route>
        </Switch>
        <Footer className="footer">
          Footer
        </Footer>
      </Router>
    );
  }
}

export default App;


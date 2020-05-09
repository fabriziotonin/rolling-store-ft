import React, { Component } from 'react';
import logo from '../logo.png';
import { Layout, Input, Row, Col } from 'antd';
import ProductCard from './ProductCard';
const { Header, Content, Footer } = Layout;
const { Search } = Input;

export default class Main extends Component {

  render() {
    const { userName, products } = this.props

    return (
      <Layout>
        <Header className="header">
          <Row>
            <Col xs={{ span: 5 }} lg={{ span: 3 }}>
              <img src={logo} className="header-logo" alt="logo" />
            </Col>
            <Col xs={{ span: 19 }} lg={{ span: 16 }}>
              <div className="header-search">
                <Search
                  placeholder="Que vas a Comprar hoy"
                  onSearch={value => console.log(value)}
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
        <Content className="content">
          <p> Basado en tu última visita</p>
          <Row>
            {
              products.map(prod => (
                <Col xs={{ span: 24 }} lg={{ span: 8 }}>
                  <ProductCard product={prod} />
                </Col>
              ))
            }
          </Row>

        </Content>
        <Footer className="footer">
          Footer
        </Footer>
      </Layout>
    )
  }
}
import React, { Component } from 'react';
import { Layout, Row, Col } from 'antd';
import ProductCard from '../ProductCard/ProductCard';
const { Content } = Layout;

export default class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
    
    }
  }


  render() {
    const { userName, products, term } = this.props

    return (
      <Layout>
        <Content className="content">
          <p> Basado en tu última visita</p>
          <Row justify="center">
            {
              products.map(prod => (
                <Col className="space-cards" key={prod.id} xs={{ span: 20 }} lg={{ span: 6 }}>
                  <ProductCard product={prod} />
                </Col>
              ))
            }
          </Row>
        </Content>
      </Layout>
    )
  }
}

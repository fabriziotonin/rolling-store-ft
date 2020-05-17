import React, { Component } from 'react';
import { Layout, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';
const { Content } = Layout;

export default class Main extends Component {

  render() {
    const { products } = this.props

    return (
      <Layout>
        <Content className="content">
          <p> Basado en tu última visita</p>
          <Row justify="center">
            {
              products.map(prod => (
                <Col className="space-cards" key={prod.id} xs={{ span: 20 }} lg={{ span: 6 }}>
                  <Link to={"/product/" + prod.id}>
                    <ProductCard product={prod} />
                  </Link>
                </Col>
              ))
            }
          </Row>
        </Content>
      </Layout>
    )
  }
}

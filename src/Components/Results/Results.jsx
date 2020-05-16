import React, { Component } from 'react';
import { Layout, Input, Row, Col } from 'antd';
import ProductCard from '../ProductCard/ProductCard';
import { Redirect } from 'react-router-dom';
const { Content } = Layout;

export default class Results extends Component {
  constructor(props) {
    super(props)
    this.state = {
      redirect: false
    }
  }
  


  render() {
    const {  results } = this.props
    console.log(results)
    return (
      <Layout>
        <Content className="content">
          <p> Resultados: </p>
          <Row  justify="center">
            {
              results.map(prod => (
                <Col xs={{ span: 24 }} lg={{ span: 8 }}>
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

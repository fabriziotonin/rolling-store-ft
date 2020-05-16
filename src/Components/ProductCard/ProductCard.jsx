import React, { Component } from 'react';
import { Card, Space } from 'antd';
import '../../App.css';

export default class ProductCard extends Component {
  render() {

    const { name, brand, price } = this.props.product;
    const { Meta } = Card;


    return (
      <Card
        className="card"
        hoverable
      >
        <img className="img-fluid" alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
        <Space direction="vertical">
          <Meta title={"Producto: ", name} />
          <div>Modelo: {brand}</div>
          <div>Precio: {price}</div>
        </Space>
      </Card>
    )
  }
}

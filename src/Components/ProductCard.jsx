import React, { Component } from 'react'

export default class ProductCard extends Component {
  render() {

    const {name, brand, price} = this.props.product;


    return (
      <div className="product-card">
        <div>Producto: {name}</div>
        <div>Producto: {brand}</div>
        <div>Producto: {price}</div>
      </div>
    )
  }
}

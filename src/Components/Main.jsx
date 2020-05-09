import React, { Component } from 'react';
import logo from '../logo.png';

export default class Main extends Component {
  render() {
    return (
      <div>
        hola desde main
        <img src={logo} className=""/>
      </div>
    )
  }
}

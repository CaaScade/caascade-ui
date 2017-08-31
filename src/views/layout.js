import React, { Component } from 'react';

import NavBar from '../components/navbar';
import Footer from '../components/footer';

export default class Layout extends Component {
  render() {
    return (
      <div className="main">
        <div className="caascade-header">
          <NavBar />
        </div>
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

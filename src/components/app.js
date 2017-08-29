import React, { Component } from 'react';

import NavBar from './navbar';
import Main from './main';
import Footer from './footer';

export default class App extends Component {
  render() {
    return (
	  <div className="main">
	    <div className="caascade-header">
          <NavBar />
	    </div>
		<Main />
		<Footer />
	  </div>
    );
  }
}

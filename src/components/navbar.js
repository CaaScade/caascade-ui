import React, { Component } from 'react';
import MdSettings from 'react-icons/lib/md/settings';
import MdPeople from 'react-icons/lib/md/people';
import MdLayers from 'react-icons/lib/md/layers';
import MdLocalGroceryStore from 'react-icons/lib/md/local-grocery-store';
import { Link } from 'react-router';

import Logo from './logo';

class NavBar extends Component {
  render() {
    return (
    <div className="caascade-navbar">
      <ul>
        <li> <Link to='/' className='logo-link'> <Logo /> </Link> </li>
        <li> <a className="navbar-item" href="#"> <MdSettings /> Settings </a> </li>
        <li> <a className="navbar-item" href="#"> <MdPeople /> Profiles </a> </li>
        <li> <a className="navbar-item" href="#"> <MdLayers /> Applications </a> </li>
        <li> <a className="navbar-item" href="#"> <MdLocalGroceryStore /> App Store </a> </li>
      </ul>
    </div>
  );
  }
}

export default NavBar;

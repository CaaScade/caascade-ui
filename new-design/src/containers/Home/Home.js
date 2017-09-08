import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-toolbox/lib/button';
import {TopBar} from '../../components/TopBar' 
import Applications from "../../components/Applications";

export default class Home extends Component {
  render () {
    return (
      <div>
        <TopBar/>
      </div>
      
    );
  }
}

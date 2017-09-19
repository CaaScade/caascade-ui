import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from 'react-toolbox/lib/app_bar';
import Navigation from 'react-toolbox/lib/navigation';
import Link from 'react-toolbox/lib/link';
export class TopBar extends Component {
  render () {
    return (
      <div>
        <AppBar title='CaasCade' leftIcon='menu'>
          <Navigation type="horizontal">
            <Link href='/dashboard' label='App Store' icon='shopping_cart' style={{ color: '#fff', textDecoration: 'none' }} />
            <Link href='/applications' label='Applications' icon='dashboard' style={{ color: '#fff', textDecoration: 'none' }} />
            <Link href='/' label='Profiles' icon='supervisor_account' style={{ color: '#fff', textDecoration: 'none' }} />
            <Link href='/' label='Settings' icon='settings' style={{ color: '#fff', textDecoration: 'none' }} />
          </Navigation>
        </AppBar>
      </div>
    );
  }
}
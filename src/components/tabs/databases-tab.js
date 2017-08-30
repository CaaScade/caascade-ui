import React, { Component, PropTypes } from 'react';

import AppCard from '../app-card';

class DatabasesTab extends Component {
  render() {
    return(
      <div className="app-catalog">
        <AppCard name='Cassandra' logoSrc='resources/Cassandra_logo.png' />
        <AppCard name='CouchDB' logoSrc='resources/CouchDB.png' />
        <AppCard name='HBase' logoSrc='resources/big_h_logo.svg' />
      </div>
    );
  }
}

export default DatabasesTab;

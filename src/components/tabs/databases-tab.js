import React, { Component, PropTypes } from 'react';

import AppCard from '../app-card';

class DatabasesTab extends Component {
  static propTypes = {
    onSelectApp: PropTypes.func.isRequired,
    selectedApp: PropTypes.string.isRequired
  }

  render() {
    const {onSelectApp, selectedApp} = this.props;

    return(
      <div className="app-catalog">
        <AppCard
          id='postgresql'
          name='PostgreSQL'
          logoSrc='resources/postgres.png'
          onSelect={onSelectApp}
          isSelected={selectedApp === 'postgresql'}
        />
        <AppCard
          name='Cassandra'
          logoSrc='resources/Cassandra_logo.png'
          id='cassandra'
          onSelect={onSelectApp}
          isSelected={selectedApp === 'cassandra'}
        />
        <AppCard
          name='CouchDB'
          logoSrc='resources/CouchDB.png'
          id='couchdb'
          onSelect={onSelectApp}
          isSelected={selectedApp === 'couchdb'}
        />
        <AppCard
          name='HBase'
          logoSrc='resources/big_h_logo.svg'
          id='hbase'
          onSelect={onSelectApp}
          isSelected={selectedApp === 'hbase'}
        />
      </div>
    );
  }
}

export default DatabasesTab;

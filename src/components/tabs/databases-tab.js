import React, { Component, PropTypes } from 'react';

import AppCard from '../app-card';

class DatabasesTab extends Component {
  static propTypes = {
    onSelectApp: PropTypes.func.isRequired,
    selectedApp: PropTypes.string.isRequired
  }

  render() {
    return(
      <div className="app-catalog">
        <AppCard
          id='postgresql'
          name='PostgreSQL'
          logoSrc='resources/postgres.png'
          onSelect={this.props.onSelectApp}
          isSelected={this.props.selectedApp === 'postgresql'}
        />
        <AppCard name='Cassandra' logoSrc='resources/Cassandra_logo.png' />
        <AppCard name='CouchDB' logoSrc='resources/CouchDB.png' />
        <AppCard name='HBase' logoSrc='resources/big_h_logo.svg' />
      </div>
    );
  }
}

export default DatabasesTab;

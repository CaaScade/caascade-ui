import React, { Component, PropTypes } from 'react';

import AppCard from '../app-card';
import PostgresqlAppModal from '../postgresql-app-modal';

class DatabasesTab extends Component {
  static propTypes = {
    onSelect: PropTypes.func.isRequired,
    selectedApp: PropTypes.string.isRequired,
    selectedAppConfig: PropTypes.any,
    onSetSelectedAppConfig: PropTypes.func.isRequired
  }

  render() {
    return(
      <div className="app-catalog">
        <PostgresqlAppModal
          onInstall={() => console.warn('INSTALLING POSTGRES')}
          config={this.props.selectedAppConfig}
          onSetConfig={this.props.onSetSelectedAppConfig}
        />

        <AppCard
          id='postgresql'
          name='PostgreSQL'
          logoSrc='resources/postgres.png'
          isSelected={this.props.selectedApp === 'postgresql'}
          onSelect={id => this.props.onSelect(id)}
        />
        <AppCard name='Cassandra' logoSrc='resources/Cassandra_logo.png' />
        <AppCard name='CouchDB' logoSrc='resources/CouchDB.png' />
        <AppCard name='HBase' logoSrc='resources/big_h_logo.svg' />
      </div>
    );
  }
}

export default DatabasesTab;

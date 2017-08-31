import React, { Component, PropTypes } from 'react';

import AppCard from '../app-card';

class CachesTab extends Component {
  static propTypes = {
    onSelectApp: PropTypes.func.isRequired,
    selectedApp: PropTypes.string.isRequired
  }

  render() {
    const {onSelectApp, selectedApp} = this.props;

    return(
        <div className="app-catalog">
          <AppCard
            name='Redis'
            logoSrc='resources/redis.png'
            id='redis'
            onSelect={onSelectApp}
            isSelected={selectedApp === 'redis'}
          />
          <AppCard
            name='Memcached'
            logoSrc='resources/memcached.png'
            id='memcached'
            onSelect={onSelectApp}
            isSelected={selectedApp === 'memcached'}
          />
          <AppCard
            name='BoltDB'
            logoSrc='resources/boltb.png'
            id='boltdb'
            onSelect={onSelectApp}
            isSelected={selectedApp === 'boltdb'}
          />
          <AppCard
            name='Aerospike'
            logoSrc='resources/aerospike.png'
            id='aerospike'
            onSelect={onSelectApp}
            isSelected={selectedApp === 'aerospike'}
          />
        </div>
    );
  }
}

export default CachesTab;

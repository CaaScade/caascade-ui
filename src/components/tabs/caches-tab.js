import React, { Component, PropTypes } from 'react';

import AppCard from '../app-card';

class CachesTab extends Component {
  render() {
    return(
        <div className="app-catalog">
          <AppCard name='Redis' logoSrc='resources/redis.png' />
          <AppCard name='Memcached' logoSrc='resources/memcached.png' />
          <AppCard name='BoltDB' logoSrc='resources/boltb.png' />
          <AppCard name='Aerospike' logoSrc='resources/aerospike.png' />
        </div>
    );
  }
}

export default CachesTab;

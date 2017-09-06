import React, { Component, PropTypes } from 'react';

import AppCard from '../app-card';

class LoadBalancersTab extends Component {
  static propTypes = {
    onSelectApp: PropTypes.func.isRequired,
    selectedApp: PropTypes.string.isRequired
  }

  render() {
    const {onSelectApp, selectedApp} = this.props;

    return(
      <div className="app-catalog">
        <AppCard
          name='Traefik'
          logoSrc='resources/traefik.png'
          id='traefik'
          onSelect={onSelectApp}
          isSelected={selectedApp === 'traefik'}
        />
        <AppCard
          name='HaProxy'
          logoSrc='resources/haproxy.png'
          id='haproxy'
          onSelect={onSelectApp}
          isSelected={selectedApp === 'haproxy'}
        />
        <AppCard
          name='Nginx'
          logoSrc='resources/nginx.png'
          id='nginx'
          onSelect={onSelectApp}
          isSelected={selectedApp === 'nginx'}
        />
      </div>
    );
  }
}

export default LoadBalancersTab;

import React, { Component, PropTypes } from 'react';

import AppCard from '../app-card';

class LoadBalancersTab extends Component {
	render() {
		return(
			<div className="app-catalog">
        <AppCard name='Traefik' logoSrc='resources/traefik.png' />
        <AppCard name='HaProxy' logoSrc='resources/haproxy.png' />
        <AppCard name='Nginx' logoSrc='resources/nginx.png' />
			</div>
		);
	}
}

export default LoadBalancersTab;

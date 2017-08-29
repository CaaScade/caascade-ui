import React, { Component, PropTypes } from 'react';

import AppCard from '../app-card';

class LoadBalancersTab extends Component {
	render() {
		return(
			<div className="app-catalog">
        <AppCard name='Load Balancer' logoSrc='resources/postgres.png' />
			</div>
		);
	}
}

export default LoadBalancersTab;

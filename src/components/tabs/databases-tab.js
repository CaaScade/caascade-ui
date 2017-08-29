import React, { Component, PropTypes } from 'react';

import AppCard from '../app-card';

class DatabasesTab extends Component {
	render() {
		return(
			<div className="app-catalog">
        <AppCard name='Databases' logoSrc='resources/postgres.png' />
			</div>
		);
	}
}

export default DatabasesTab;

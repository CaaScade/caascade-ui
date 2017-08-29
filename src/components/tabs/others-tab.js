import React, { Component, PropTypes } from 'react';

import AppCard from '../app-card';

class OthersTab extends Component {
	render() {
		return(
			  <div className="app-catalog">
        <AppCard name='Others' logoSrc='resources/postgres.png' />
			  </div>
		);
	}
}

export default OthersTab;

import React, { Component, PropTypes } from 'react';

import AppCard from '../app-card';

class CachesTab extends Component {
	render() {
		return(
			  <div className="app-catalog">
          <AppCard name='Caches' logoSrc='resources/postgres.png' />
			  </div>
		);
	}
}

export default CachesTab;

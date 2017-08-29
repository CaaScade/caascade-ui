import React, { Component, PropTypes } from 'react';

import AppCard from './app-card';

class AppCatalog extends Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired
  }

	render() {
		return(
			<div className="app-catalog">
        <AppCard name='PostgreSQL' logoSrc='resources/postgres.png' />
        <AppCard name='MySQL' logoSrc='resources/mysql.png' />
        <AppCard name='MongoDB' logoSrc='resources/mongodb.png' />
			</div>
		);
	}
}

export default AppCatalog;

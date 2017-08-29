import React, { Component, PropTypes } from 'react';

import PosgresAppCard from './posgres-app-card';
import MySQLAppCard from './mysql-app-card';
import MongoDBAppCard from './mongodb-app-card';


class AppCatalog extends Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired
  }

	render() {
		return(
				<div className="app-catalog">
						<PosgresAppCard />
						<MySQLAppCard />
						<MongoDBAppCard />
				</div>
		);
	}
}

export default AppCatalog;

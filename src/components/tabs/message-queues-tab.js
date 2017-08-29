import React, { Component, PropTypes } from 'react';

import AppCard from '../app-card';

class MessageQueuesTab extends Component {
	render() {
		return(
			<div className="app-catalog">
        <AppCard name='Message Queue' logoSrc='resources/postgres.png' />
			</div>
		);
	}
}

export default MessageQueuesTab;

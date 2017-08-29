import React, { Component, PropTypes } from 'react';

import AppCard from '../app-card';

class MessageQueuesTab extends Component {
	render() {
		return(
			<div className="app-catalog">
        <AppCard name='RabbitMQ' logoSrc='resources/RabbitMQ.png' />
        <AppCard name='Apache Active MQ' logoSrc='resources/activemq.png' />
        <AppCard name='ZeroMQ' logoSrc='resources/zeromq1.png' />
        <AppCard name='Apache Kafka' logoSrc='resources/kafka.png' />
			</div>
		);
	}
}

export default MessageQueuesTab;

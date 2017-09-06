import React, { Component, PropTypes } from 'react';

import AppCard from '../app-card';

class MessageQueuesTab extends Component {
    static propTypes = {
    onSelectApp: PropTypes.func.isRequired,
    selectedApp: PropTypes.string.isRequired
  }

  render() {
    const {onSelectApp, selectedApp} = this.props;

    return(
      <div className="app-catalog">
        <AppCard
          name='RabbitMQ'
          logoSrc='resources/RabbitMQ.png'
          id='rabbitmq'
          onSelect={onSelectApp}
          isSelected={selectedApp === 'rabbitmq'}
        />
        <AppCard
          name='Apache Active MQ'
          logoSrc='resources/activemq.png'
          id='activemq'
          onSelect={onSelectApp}
          isSelected={selectedApp === 'activemq'}
        />
        <AppCard
          name='ZeroMQ'
          logoSrc='resources/zeromq1.png'
          id='zeromq'
          onSelect={onSelectApp}
          isSelected={selectedApp === 'zeromq'}
        />
        <AppCard
          name='Apache Kafka'
          logoSrc='resources/kafka.png'
          id='kafka'
          onSelect={onSelectApp}
          isSelected={selectedApp === 'kafka'}
        />
      </div>
    );
  }
}

export default MessageQueuesTab;

import React, { Component, PropTypes } from 'react';

import {
  LoadBalancersTab,
  CachesTab,
  MessageQueuesTab,
  DatabasesTab,
  OthersTab
} from './tabs';

class AppCatalog extends Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    onSelectApp: PropTypes.func.isRequired,
    selectedApp: PropTypes.string.isRequired
  }

  render() {
    switch(this.props.activeTab) {
      case ('load-balancers'):
        return <LoadBalancersTab />;
      case ('caches'):
        return <CachesTab />;
      case ('message-queues'):
        return <MessageQueuesTab />;
      case ('databases'):
        return (
          <DatabasesTab
            onSelectApp={this.props.onSelectApp}
            selectedApp={this.props.selectedApp}
          />
        );
      default:
        return <OthersTab />
    }
  }
}

export default AppCatalog;

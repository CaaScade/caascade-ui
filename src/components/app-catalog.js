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
    selectedApp: PropTypes.string.isRequired,
    selectedAppConfig: PropTypes.any,
    onSetSelectedAppConfig: PropTypes.func.isRequired
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
            onSelect={this.props.onSelectApp}
            selectedApp={this.props.selectedApp}
            selectedAppConfig={this.props.selectedAppConfig}
            onSetSelectedAppConfig={this.props.onSetSelectedAppConfig}
          />
        );
      default:
        return <OthersTab />
    }
  }
}

export default AppCatalog;

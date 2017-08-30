import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import {
  changeActiveTab,
  changeSelectedApp,
  showAppModal,
  setSelectedAppConfig
} from '../actions';

import TabBar from './tab-bar';
import AppCatalog from './app-catalog';

class TabbedSection extends Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    onSelectApp: PropTypes.func.isRequired,
    selectedApp: PropTypes.string.isRequired,
    onShowAppModal: PropTypes.func.isRequired,
    selectedAppConfig: PropTypes.object,
    onSetSelectedAppConfig: PropTypes.func.isRequired
  }

  render() {
    return(
      <div className="tabbed-section">
        <TabBar activeTab={this.props.activeTab} onChange={tab => this.props.changeActiveTab(tab)} />
        <AppCatalog
          activeTab={this.props.activeTab}
          onSelectApp={this.props.onSelectApp}
          selectedApp={this.props.selectedApp}
          selectedAppConfig={this.props.selectedAppConfig}
          onSetSelectedAppConfig={this.props.onSetSelectedAppConfig}
        />

        <button className="launch-button" onClick={this.props.onShowAppModal}> Launch </button>
      </div>
    );
  }
}

const mapStateToProps = ({state}) => {
  return {
    activeTab: state.activeTab,
    selectedApp: state.selectedApp,
    selectedAppConfig: state.selectedAppConfig
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeActiveTab: (tab) => dispatch(changeActiveTab(tab)),
    onSelectApp: (app) => dispatch(changeSelectedApp(app)),
    onShowAppModal: () => dispatch(showAppModal()),
    onSetSelectedAppConfig: (config) => dispatch(setSelectedAppConfig(config))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TabbedSection);

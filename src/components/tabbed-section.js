import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import {
  changeActiveTab,
  changeSelectedApp
} from '../actions';

import TabBar from './tab-bar';
import AppCatalog from './app-catalog';

class TabbedSection extends Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    onSelectApp: PropTypes.func.isRequired,
    selectedApp: PropTypes.string.isRequired
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
        />

        <a
          className={"launch-button" + (this.props.selectedApp ? '' : ' disabled')}
          href={'/launch-' + this.props.selectedApp}
        > Launch </a>
      </div>
    );
  }
}

const mapStateToProps = ({home}) => {
  return {
    activeTab: home.activeTab,
    selectedApp: home.selectedApp
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeActiveTab: (tab) => dispatch(changeActiveTab(tab)),
    onSelectApp: (app) => dispatch(changeSelectedApp(app))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TabbedSection);

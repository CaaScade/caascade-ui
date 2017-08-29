import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { changeActiveTab } from '../actions';

import TabBar from './tab-bar';
import AppCatalog from './app-catalog';
import LaunchButton from './launch-button';

class TabbedSection extends Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired
  }

	render() {
		return(
				<div className="tabbed-section">
					<TabBar onChange={tab => this.props.changeActiveTab(tab)} />
					<AppCatalog activeTab={this.props.activeTab} />
					<LaunchButton />
				</div>
		);
	}
}

const mapStateToProps = ({state}) => {
  return {
    activeTab: state.activeTab
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeActiveTab: (tab) => dispatch(changeActiveTab(tab))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TabbedSection);

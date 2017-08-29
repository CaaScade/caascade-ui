import React, { Component, PropTypes } from 'react';

class TabBar extends Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  }

  handleChangeTab = (tabName) => {
    return () => {
      this.props.onChange(tabName);
    };
  };

	render() {
		return(
			<div className="tab-bar">
				<ul className="tab-bar-list">
					<li className={this.props.activeTab === 'load-balancers' && 'active'} onClick={this.handleChangeTab('load-balancers')}> Load balancers </li>
					<li className={this.props.activeTab === 'caches' && 'active'} onClick={this.handleChangeTab('caches')}> Caches </li>
					<li className={this.props.activeTab === 'message-queues' && 'active'} onClick={this.handleChangeTab('message-queues')}> Message Queues </li>
					<li className={this.props.activeTab === 'databases' && 'active'} onClick={this.handleChangeTab('databases')}> Databases </li>
					<li className={this.props.activeTab === 'others' && 'active'} onClick={this.handleChangeTab('others')}> Others </li>
				</ul>
			</div>
		);
	}
}

export default TabBar;

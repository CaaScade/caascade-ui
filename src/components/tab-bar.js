import React, { Component, PropTypes } from 'react';

class TabBar extends Component {
  static propTypes = {
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
					<li onClick={this.handleChangeTab('load-balancers')}> Load balancers </li>
					<li onClick={this.handleChangeTab('caches')}> Caches </li>
					<li onClick={this.handleChangeTab('message-queues')}> Message Queues </li>
					<li onClick={this.handleChangeTab('databases')}> Databases </li>
					<li onClick={this.handleChangeTab('others')}> Others </li>
				</ul>
			</div>
		);
	}
}

export default TabBar;

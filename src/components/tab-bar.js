import React, { Component } from 'react';

class TabBar extends Component {
	render() {
		return(
			<div className="tab-bar">
				<ul className="tab-bar-list">
					<li> Load balancers </li>
					<li> Caches </li>
					<li> Message Queues </li>
					<li> Databases </li>
					<li> Others </li>
				</ul>
			</div>
		);
	}
}

export default TabBar;

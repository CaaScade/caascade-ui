import React, { Component } from 'react';

import TabBar from './tab-bar';
import AppCatalog from './app-catalog';
import LaunchButton from './launch-button';

class TabbedSection extends Component {
	render() {
		return(
				<div className="tabbed-section">
					<TabBar />
					<AppCatalog />
					<LaunchButton />
				</div>
		);
	}
}

export default TabbedSection;

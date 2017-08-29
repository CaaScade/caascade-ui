import React, { Component } from 'react';

import CreateAppButton from './create-app-button';
import ManageExistingAppButton from './manage-existing-app-button';
import CreateAppButtonLabel from './create-app-button-label';
import ManageExistingAppButtonLabel from './manage-existing-app-button-label';
import TabbedSection from './tabbed-section';

class Main extends Component {
	render() {
		return (
				<div className="main-section">
					<CreateAppButton />
					<ManageExistingAppButton />
				    <CreateAppButtonLabel />
					<ManageExistingAppButtonLabel />
					<TabbedSection />
				</div>
		);
	}
}

export default Main;

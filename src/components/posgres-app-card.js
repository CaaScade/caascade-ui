import React, { Component } from 'react';

class PosgresAppCard extends Component {
	render() {
		return(
			<div className="app-card"> 
				<img src="resources/postgres.png" alt="PostgreSQL" />
				<label className="app-card-desc"> PostgreSQL </label>
			</div>
		);
	}
}

export default PosgresAppCard;

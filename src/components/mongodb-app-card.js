import React, { Component } from 'react';

class MongoDBAppCard extends Component {
	render() {
		return(
			<div className="app-card"> 
				<img src="resources/mongodb.png" alt="MongoDB" />
				<label className="app-card-desc"> MongoDB </label>
			</div>
		);
	}
}

export default MongoDBAppCard;

import React, { Component } from 'react';

class MySQLAppCard extends Component {
	render() {
		return(
			<div className="app-card"> 
				<img src="resources/mysql.png" alt="MySQL" />
				<label className="app-card-desc"> MySQL </label>
			</div>
		);
	}
}

export default MySQLAppCard;

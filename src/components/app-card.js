import React, { Component, PropTypes } from 'react';

class AppCard extends Component {
  static propTypes = {
    logoSrc: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }

  render() {
    return(
      <div className="app-card">
        <img src={this.props.logoSrc} alt={this.props.name} />
        <label className="app-card-desc"> {this.props.name} </label>
      </div>
    );
  }
}

export default AppCard;

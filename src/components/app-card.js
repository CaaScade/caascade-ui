import React, { Component, PropTypes } from 'react';

class AppCard extends Component {
  static propTypes = {
    logoSrc: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string,
    isSelected: PropTypes.bool,
    onSelect: PropTypes.func
  }

  handleSelect = () => {
    const onSelect = this.props.onSelect || ( () => {} );

    onSelect(this.props.id);
  }

  render() {
    return(
      <div className={"app-card" + (this.props.isSelected ? ' active' : '')} onClick={this.handleSelect}>
        <img src={this.props.logoSrc} alt={this.props.name} />
        <label className="app-card-desc"> {this.props.name} </label>
      </div>
    );
  }
}

export default AppCard;

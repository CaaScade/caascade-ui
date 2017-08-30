import React, { Component, PropTypes } from 'react';

import { connect } from 'react-redux';

import { hideAppModal } from '../actions';

class FullPageModal extends Component {
  static propTypes = {
    children: PropTypes.arrayOf(PropTypes.element.isRequired).isRequired,
    isShown: PropTypes.bool.isRequired,
    onSuccess: PropTypes.func.isRequired
  }

  disableBodyScroll = () => {
    document.body.scrollTop = 0;
    document.body.classList.add('noscroll');
  }

  enableBodyScroll = () => {
    document.body.classList.remove('noscroll');
  };

  handleHide = () => {
    this.enableBodyScroll();

    this.props.dispatch(hideAppModal())
  };

  render() {
    if (!this.props.isShown) {
      return null;
    }

    this.disableBodyScroll();

    return(
      <div className="full-page-modal container-fluid">
        <div className="content ">
          {this.props.children}

          <div className="control-buttons">
            <button className="cancel" onClick={this.handleHide}>Cancel</button>
            <button className="success" onClick={this.props.onSuccess}>Install</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({state}) => {
  return {
    isShown: Boolean(state.selectedApp) && state.isShowingAppModal
  };
};

export default connect(mapStateToProps)(FullPageModal);

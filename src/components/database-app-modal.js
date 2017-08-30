import React, { Component, PropTypes } from 'react';

import FullPageModal from './full-page-modal';

class DatabaseAppModal extends Component {
  static propTypes = {
    onInstall: PropTypes.func.isRequired
  }

  render() {
    return(
      <FullPageModal onSuccess={this.props.onInstall} >
        <h1>PostgreSQL</h1>

        <div className="app-config">
          <div className="app-config__info">
            <div className="app-info__images">
              <img src="/resources/postgres.png" className="app-info__logo" />
              <img src="/resources/postgres-chart.png" className="app-info__chart" />
            </div>
            <span className="app-info__desc">
              PostgreSQL (pronounced "post-gress-Q-L") is an open source relational database management system ( DBMS ) developed by a worldwide team of volunteers. PostgreSQL is not controlled by any corporation or other private entity and the source code is available free of charge.
            </span>
          </div>
        </div>
      </FullPageModal>
    );
  }
}

export default DatabaseAppModal;

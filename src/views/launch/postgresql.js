import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class LaunchPostgresql extends Component {
  static propTypes = {
    version: PropTypes.string.isRequired
  }

  render() {
    const versionsJsx = ['v9.5.1', 'v9.6.1', 'v9.6.2', 'v9.7'].map((version) => {
      return (
        <li
          key={version}
          className={"app-config__version-tab" + (this.props.version === version ? ' active' : '')}
          onClick={() => this.props.onSetConfig({version})}
        >{version}</li>
      );
    })

    return(
      <div className="app-config">
        <h2 className="app-config__header">PostgreSQL</h2>

        <div className="app-config__info">
          <div className="app-info__images">
            <img src="/resources/postgres.png" className="app-info__logo" />
            <img src="/resources/postgres-chart.png" className="app-info__chart" />
          </div>
          <span className="app-info__desc">
            PostgreSQL (pronounced "post-gress-Q-L") is an open source relational database management system ( DBMS ) developed by a worldwide team of volunteers. PostgreSQL is not controlled by any corporation or other private entity and the source code is available free of charge.
          </span>
        </div>

        <div className="app-config__config-form">
          <div className="app-config-form__versions-bar">
            <ul className="app-config__versions-list">
              {versionsJsx}
            </ul>
          </div>

          <div className="app-config-form__form-container">
            <h2 className="app-config-form__heading">Configure your PostgreSQL installation</h2>

            <div className="app-config-form__form">
              <form className="app-config__master-form">
                <div className="form-row">
                  <label className="form-label">Number of Masters</label>
                  <input className="form-input number-input" type="number" />
                </div>

                <div className="form-row">
                  <label className="form-label">Master Availability Zones</label>
                  <select className="form-input" multiple>
                    <option value="volvo">us-east-1</option>
                  </select>
                </div>

                <div className="form-row">
                  <label className="form-label">Synchronous Replication</label>
                  <input className="form-input" type="checkbox" />
                </div>
              </form>

              <form className="app-config__slave-form">
                <div className="form-row">
                  <label className="form-label">Number of Slaves</label>
                  <input className="form-input number-input" type="number" />
                </div>

                <div className="form-row">
                  <label className="form-label">Slave Availability Zones</label>
                  <select className="form-input" multiple>
                    <option value="volvo">us-east-2</option>
                    <option value="volvo">us-west-1</option>
                  </select>
                </div>

                <div className="form-row">
                  <label className="form-label">Automatic Backups</label>
                  <input className="form-input" type="checkbox" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({launch}) => {
  return {
    version: launch.postgresql.version
  };
};

export default connect(mapStateToProps)(LaunchPostgresql);

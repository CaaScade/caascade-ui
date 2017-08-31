import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import {
  updateLaunchPostgresqlForm,
  updateLaunchPostgresqlVersion
} from '../../actions';

class LaunchPostgresql extends Component {
  static propTypes = {
    version: PropTypes.string.isRequired,
    form: PropTypes.shape({
      mastersCount: PropTypes.number,
      masterAvailabilityZone: PropTypes.string,
      synchronousReplication: PropTypes.bool,
      slavesCount: PropTypes.number,
      slaveAvailabilityZone: PropTypes.arrayOf(PropTypes.string),
      automaticBackups: PropTypes.bool
    }).isRequired
  }

  updateFormValue = ({name, value}) => {
    const newForm = {
      ...this.props.form,
      [name]: value
    };

    this.props.updateForm(newForm);
  }

  render() {
    const { form } = this.props;

    const versionsJsx = ['v9.5.1', 'v9.6.1', 'v9.6.2', 'v9.7'].map((version) => {
      return (
        <li
          key={version}
          className={"app-config__version-tab" + (this.props.version === version ? ' active' : '')}
          onClick={() => this.props.onChangeVersion(version)}
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
              <form className="app-config__master-form" ref={(form) => { this.masterForm = form; }}>
                <div className="form-row">
                  <label className="form-label">Number of Masters</label>
                  <input
                    className="form-input number-input"
                    type="number" value={form.mastersCount}
                    name='mastersCount'
                    onChange={(e) => this.updateFormValue({name: e.target.name, value: parseInt(e.target.value, 10)})}
                  />
                </div>

                <div className="form-row">
                  <label className="form-label">Master Availability Zones</label>
                  <select className="form-input" multiple>
                    <option value="volvo">us-east-1</option>
                  </select>
                </div>

                <div className="form-row">
                  <label className="form-label">Synchronous Replication</label>
                  <input
                    className="form-input"
                    type="checkbox"
                    checked={form.synchronousReplication}
                    name="synchronousReplication"
                    onChange={(e) => this.updateFormValue({name: e.target.name, value: !form.synchronousReplication})}
                  />
                </div>
              </form>

              <form className="app-config__slave-form">
                <div className="form-row">
                  <label className="form-label">Number of Slaves</label>
                  <input
                    className="form-input number-input"
                    type="number"
                    value={form.slavesCount}
                    name='slavesCount'
                    onChange={(e) => this.updateFormValue({name: e.target.name, value: parseInt(e.target.value, 10)})}
                  />
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
                  <input
                    className="form-input"
                    type="checkbox"
                    checked={form.automaticBackups}
                    name='automaticBackups'
                    onChange={(e) => this.updateFormValue({name: e.target.name, value: !form.automaticBackups})}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="control-buttons">
          <Link className="cancel" to='/'>Cancel</Link>
          <button className="success">Install</button>
        </div>

      </div>
    );
  }
}

const mapStateToProps = ({launch}) => {
  return {
    version: launch.postgresql.version,
    form: launch.postgresql.configForm
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeVersion: (version) => dispatch(updateLaunchPostgresqlVersion(version)),
    updateForm: (form) => dispatch(updateLaunchPostgresqlForm(form))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(LaunchPostgresql);

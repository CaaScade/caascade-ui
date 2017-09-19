import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import { Row, Col } from 'react-grid-system';
import Dropdown from 'react-toolbox/lib/dropdown';
import Switch from 'react-toolbox/lib/switch';
export default  class ProgramConfigCard extends Component {

state = { value: '1' };
 handleChangeM = (value) => {
    this.setState({value: value});
  };
  handleChangeZ = (value) => {
    this.setState({value: value});
  };
  render () {
    const { imgPath, title,cardClick, cardId , clicked} = this.props;
  

      const masters = [
  { value: '1', label: '1' },
  { value: '2', label: '2'},
  { value: '3', label: '3' },
  { value: '4', label: '4'}
];
   const zones = [
  { value: 'us-east-1', label: 'us-east-1' },
  { value: 'us-east-2', label: 'us-east-2'},
  { value: 'us-west-1', label: 'us-west-1' },
  { value: 'us-west-2', label: 'us-west-2'}
];
    return (
          <Row>
          <Col sm={6} style={{"borderRight":"1px solid black"}}>
          <div>
          <Row>
          <Col sm={6}>
          <p>Number of Maseters</p>
          </Col>
           <Col sm={6}>
          <Dropdown
        auto
        onChange={this.handleChange}
        source={masters}
        value={this.state.value}
      />
          </Col>

          <Col sm={6}>
          <p>Master Availabilty Zones</p>
          </Col>
           <Col sm={6}>
          <Dropdown
        auto
        onChange={this.handleChange}
        source={zones}
        value={this.state.value}
      />
          </Col>
           <Col sm={6}>
          <p>Synchrounus Replication</p>
          </Col>
           <Col sm={6}>
          <Switch
          checked={false}
        />
          </Col>
          </Row>
          </div>
          
          </Col>
          <Col sm={6} >
          <div>
          <Row>
          <Col sm={6}>
          <p>Number of Slaves</p>
          </Col>
           <Col sm={6}>
          <Dropdown
        auto
        onChange={this.handleChange}
        source={masters}
        value={this.state.value}
      />
          </Col>

          <Col sm={6}>
          <p>Master Availabilty Zones</p>
          </Col>
           <Col sm={6}>
          <Dropdown
        auto
        onChange={this.handleChange}
        source={zones}
        value={this.state.value}
      />
          </Col>
           <Col sm={6}>
          <p>Automatic Backup</p>
          </Col>
           <Col sm={6}>
          <Switch
          checked={true}
        />
          </Col>
          </Row>
          </div>
          
          </Col>
          </Row>
      
    );
  }
}

ProgramConfigCard.propTypes = {
  cardClick: PropTypes.func,
  imgPath: PropTypes.string,
  title: PropTypes.string,
  cardId: PropTypes.number
};
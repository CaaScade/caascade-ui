import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab } from 'react-toolbox';
import { Row, Col } from 'react-grid-system';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import {LineChart,Line,XAxis,YAxis,CartesianGrid,Tooltip,Legend} from "recharts";
import {Button, IconButton} from 'react-toolbox/lib/button';
import ProgramConfigCard from "../ProgramConfigCard";

export default class ProgramLauncher extends Component {
  state = {
    tabIndex: 0,
    fixedIndex: 0,
    statusTabIndex: 0
  };
   handleVersionTabChange = index => {
    this.setState({ fixedIndex: index });
  };
   cancellaunchProgram=()=>{
   if (typeof window !== 'undefined') {
           window.location.href = "/applications";
      }
 }
     installProgram=()=>{
   if (typeof window !== 'undefined') {
           window.location.href = "/monitor";
      }
 }
 render(){
    const {
      tabIndex,
      tabView,
      fixedIndex,
      currentId,
      launch,
      statusTabIndex
    } = this.state;
  const versionTabs = [
  { name: "v1.0" },
  { name: "v1.1" },
  { name: "v1.2" },
  { name: "v1.3" },
  { name: "v1.4" }
];
    const data = [
      { name: "Page A", uv: 4000 },
      { name: "Page B", uv: 3000 },
      { name: "Page C", uv: 2000 }
    ];
   
    const renderVersionTabs = versionTabs.map((tab, i) => {
      return (
        <Tab label={tab.name} key={i}>
          <div>
            {fixedIndex === 0 && (
              <div>
                <ProgramConfigCard />
              </div>
            )}
            {fixedIndex === 1 && (
              <div>
                <ProgramConfigCard />
              </div>
            )}
            {fixedIndex === 2 && (
              <div>
                <ProgramConfigCard />
              </div>
            )}

            {fixedIndex === 3 && (
              <div>
                <ProgramConfigCard />
              </div>
            )}

            {fixedIndex === 4 && (
              <div>
                <ProgramConfigCard />
              </div>
            )}

            {fixedIndex === 5 && (
              <div>ProgramMonitor
                <ProgramConfigCard />
              </div>
            )}
          </div>
        </Tab>
      );
    });
   return(
    <Card >
          <Row>
            <Col sm={12}>
              <h1 style={{ paddingLeft: "10px" }}>PostgreSQL</h1>
            </Col>
          </Row>
          <Row>
            <Col sm={2}>
              <img
                style={{ paddingLeft: "10px" }}
                src="/static/images/postgres.png"
                width="200px"
                height="200px"
              />
            </Col>
            <Col sm={3}>
              <LineChart
                width={300}
                height={200}
                data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="pv"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
              </LineChart>
            </Col>
            <Col sm={6}>
              <b>
                PostgreSQL (pronunced "post-gress-Q-L") is an open source
                relational database management system (DBMS) developed by a
                world wide team of volunteers.PostgreSQL is not controller by
                corporation or other private entity and the source code is
                avaiable free of charge
              </b>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Tabs
                index={fixedIndex}
                onChange={this.handleVersionTabChange}
                inverse
              >
                {renderVersionTabs}
              </Tabs>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Col sm={11}>
                <div style={{ float: "right" }}>
                  <Button
                    label="Cancel"
                    onClick={() => this.cancellaunchProgram()}
                    raised
                    primary
                  />
                </div>
              </Col>
              <Col sm={1}>
                <div style={{ float: "right" }}>
                  <Button
                    label="Install"
                    onClick={() => this.installProgram()}
                    raised
                    primary
                  />
                </div>
              </Col>
            </Col>
          </Row>
        </Card>
   )
 }
}
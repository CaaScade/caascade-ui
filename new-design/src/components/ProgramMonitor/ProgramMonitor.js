import React, { Component } from "react";
import PropTypes from "prop-types";
import { Tabs, Tab } from "react-toolbox";
import { Row, Col, Container } from "react-grid-system";
import CategoryCard from "../CategoryCard";
import Dropdown from "react-toolbox/lib/dropdown";
import {
  Card,
  CardMedia,
  CardTitle,
  CardText,
  CardActions
} from "react-toolbox/lib/card";
import Table from "react-toolbox/lib/table";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import { Button, IconButton } from "react-toolbox/lib/button";
import Dialog from "react-toolbox/lib/dialog";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import Switch from "react-toolbox/lib/switch";

const statusTabs = [
  { name: "Overview" },
  { name: "Monitring" },
  { name: "Logs" },
  { name: "Conrol Panel" }
];
const masters = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" }
];
const users = [
  { value: "1", label: "Admin" },
  { value: "2", label: "User 1" },
  { value: "3", label: "User 2" }
];
const EventModel = {
  name: { type: String },
  info: { type: String },
  time: { type: Date }
};
const events = [
  {
    name: "Info",
    info: "Master come up successfully",
    time: "10:53:00GMT"
  },
  {
    name: "Info",
    info: "Master come up successfully",
    time: "10:53:00GMT"
  },
  {
    name: "Info",
    info: "Master come up successfully",
    time: "10:53:00GMT"
  },
  {
    name: "Info",
    info: "Master come up successfully",
    time: "10:53:00GMT"
  }
];
const logsData=[{
  date:"2007-08-31 19:22: 469 ADT",
  log:"[unknown] Log connection received host:198.235.3.6"
},
{
  date:"2007-08-31 19:22: 469 ADT",
  log:"[unknown] Log connection received host:198.235.3.6"
},{
  date:"2007-08-31 19:22: 469 ADT",
  log:"[unknown] Log connection received host:198.235.3.6"
},{
  date:"2007-08-31 19:22: 469 ADT",
  log:"[unknown] Log connection received host:198.235.3.6"
},
]
export default class ProgramMonitor extends Component {
  state = {
    tabIndex: 0,
    fixedIndex: 1,
    statusTabIndex: 1,
    source: events,
    logs:logsData
  };
  cancelLaunchProgram = () => {
    this.setState({ launch: false });
  };
  launchProgram = () => {
    this.setState({ launch: true });
  };
  handlestatusTabChange = index => {
    this.setState({ statusTabIndex: index });
  };
  render() {
    const {
      tabIndex,
      tabView,
      fixedIndex,
      currentId,
      launch,
      statusTabIndex,
      source,
      logs
    } = this.state;
    const data = [
      { name: "Page A", uv: 4000 },
      { name: "Page B", uv: 3000 },
      { name: "Page C", uv: 2000 }
    ];

    const tableData = source.map(tdata => {
      return (
        <tr>
          <td style={{textAlign:"center"}}>{tdata.name}</td>
          <td style={{textAlign:"center"}}>{tdata.info}</td>
          <td style={{textAlign:"center"}}>{tdata.time}</td>
        </tr>
      );
    });
     const logsDatax = logs.map(tdata => {
      return (
        <tr>
          <td style={{textAlign:"center"}}>{tdata.date}</td>
          <td style={{textAlign:"center"}}>{tdata.log}</td>
        </tr>
      );
    });
    const progressTabs = statusTabs.map((tab, i) => {
      return (
        <Tab label={tab.name} key={i}>
          <div>
            {statusTabIndex === 0 && (
              <div>
                <Row>
                  <Col sm={11}>
                    <div style={{ float: "right" }}>
                      <p>Status:Healthy</p>
                    </div>
                  </Col>
                  <Col sm={1}>
                    <Switch checked={true} />
                  </Col>
                </Row>
                <Row>
                  <Col sm={12}>
                    <div style={{ textAlign: "center" }}>
                      <img src="/static/images/master_slave1.png" width="40%" />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col sm={12}>
                    <h1>Event Log</h1>
                  </Col>
                  <Col sm={12}>
                    <div>
                    <table style={{width:"100%"}}>
                    <tr style={{background:"gray"}}>
                    <th>Name</th>
                    <th>Info</th>
                    <th>Time</th>
                    </tr>
                    {tableData}
                    </table>
                    </div>
                  </Col>
                </Row>
              </div>
            )}
            {statusTabIndex === 1 && (
              <div>
                <Row>
                  <Col sm={11}>
                    <div style={{ float: "right" }}>
                      <p>Status:Healthy</p>
                    </div>
                  </Col>
                  <Col sm={1}>
                    <Switch checked={true} />
                  </Col>
                </Row>
                <Row>
                  <Col sm={4}>
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
                    <h3 style={{ "text-align": "center" }}>CPU</h3>
                  </Col>
                  <Col sm={4}>
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
                    <h3 style={{ "text-align": "center" }}>Memory</h3>
                  </Col>
                  <Col sm={4}>
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
                    <h3 style={{ "text-align": "center" }}>Network</h3>
                  </Col>
                </Row>
              </div>
            )}
            {statusTabIndex === 2 && (
              <div>
            <Row>
                  <Col sm={11}>
                    <div style={{ float: "right" }}>
                      <p>Status:Healthy</p>
                    </div>
                  </Col>
                  <Col sm={1}>
                    <Switch checked={true} />
                  </Col>
                </Row>
                  <Row>
                  <Col sm={12}>
                    <h1>Master</h1>
                  </Col>
                  <Col sm={12}>
                    <div>
                    <table style={{width:"100%"}}>
                    <tr style={{background:"gray"}}>
                    <th>Date</th>
                    <th>Log</th>
                    </tr>
                    {logsDatax}
                    </table>
                    </div>
                  </Col>
                </Row>
                  <Row>
                  <Col sm={12}>
                    <h1>Slave 1</h1>
                  </Col>
                  <Col sm={12}>
                    <div>
                    <table style={{width:"100%"}}>
                    <tr style={{background:"gray"}}>
                    <th>Date</th>
                    <th>Log</th>
                    </tr>
                    {logsDatax}
                    </table>
                    </div>
                  </Col>
                </Row>
              </div>
            )}

            {statusTabIndex === 3 && (
              <div>
              <Row>
                  <Col sm={11}>
                    <div style={{ float: "right" }}>
                      <p>Status:Healthy</p>
                    </div>
                  </Col>
                  <Col sm={1}>
                    <Switch checked={true} />
                  </Col>
                </Row>
                <Row>
                  <Col sm={6} style={{ borderRight: "1px solid black" }}>
                    <div>

                      <Row>
                        <Col sm={6}>
                          <p>Master Scale</p>
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
                          <p>Slave Scale</p>
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
                          <p>Access Control List</p>
                        </Col>
                        <Col sm={6}>
                          <Dropdown
                            auto
                            onChange={this.handleChange}
                            source={users}
                            value={this.state.value}
                          />
                        </Col>
                      </Row>
                    </div>
                  </Col>
                  <Col sm={6}>
                    <div>
                      <Row>
                        <Col sm={12}>
                        <div style={{padding:"20px"}}>
                         <Button label="Backup Now" primary raised style={{width:"50%",textAlign:"center"}}></Button>
                        </div>
                        </Col>
                        <Col sm={12}>
                        <div style={{padding:"20px"}}>
                         <Button label="Take Snapshot" primary raised style={{width:"50%",textAlign:"center"}}></Button>
                        </div>
                        </Col>
                         <Col sm={12}>
                         <div style={{padding:"20px"}}>
                         <Button label="Migrate DB" primary raised style={{width:"50%",textAlign:"center"}}></Button>
                        </div>
                        </Col> <Col sm={12}>
                          <div style={{padding:"20px"}}>
                         <Button label="Expert Logs" primary raised style={{width:"50%",textAlign:"center"}}></Button>
                        </div>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </Row>
              </div>
            )}
          </div>
        </Tab>
      );
    });
    return (
      <div>
        <Card>
          <div>
            <Row>
              <Col sm={7}>
                <h1 style={{ paddingRight: "10px" }}>PostgreSQL</h1>
              </Col>
              <Col sm={3}>
                <Button label="List" primary />
                <Button label="Graph" raised primary />
              </Col>
              <Col sm={1}>
                <Button label="Stack View" raised primary />
              </Col>
            </Row>
          </div>
          <Tabs
            index={statusTabIndex}
            onChange={this.handlestatusTabChange}
            inverse
          >
            {progressTabs}
          </Tabs>
        </Card>
      </div>
    );
  }
}

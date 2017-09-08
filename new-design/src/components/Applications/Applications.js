import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Button } from "react-toolbox/lib/button";
import { Container, Row, Col } from "react-grid-system";
import TopBar from "../../components/TopBar";
import CategoryTabs from "../../components/CategoryTabs";
import ProgramLauncher from "../../components/ProgramLauncher";

export default class Applications extends Component {
  state = {
    txtCreateApp:
      "Create a new Kubernetes application using the CaaScade language or a git repository",
    txtManageApp:
      "Edit, Modify, or Delete Applications or Application Properties",
      tabIndex:0
  };

  render() {
    const { txtManageApp, txtCreateApp, tabIndex } = this.state;

    return (
      <div>
        <Row>
          <br />
        </Row>
        <Row>
          <Col sm={12} xs={12} md={6}>
            <Button primary raised label="Create New Application" icon="add" />
            <p> {txtCreateApp} </p>
          </Col>

          <Col sm={12} xs={12} md={6}>
            <Button primary raised label="Manage Existing Applications" />
            <p> {txtManageApp} </p>
          </Col>
        </Row>

        <Row>
        <CategoryTabs/>
        </Row>
      </div>
    );
  }
}

import React, { Component } from "react";
import Applications from "../../components/Applications";
import { Container, Row, Col } from "react-grid-system";

export default class Application extends Component {
  render() {
    return (
    <Container><Applications/></Container>
       );
  }
}

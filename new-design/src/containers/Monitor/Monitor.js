import React, {Component} from 'react';
import ProgramMonitor from '../../components/ProgramMonitor';
import { Container, Row, Col } from 'react-grid-system';

export default class Monitor extends Component {
    render() {
        return (
            <Container>
            <br/>
            <ProgramMonitor/>
            </Container>
        );
    }
}
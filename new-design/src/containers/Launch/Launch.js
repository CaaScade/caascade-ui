import React, {Component} from 'react';
import ProgramLauncher from '../../components/ProgramLauncher';
import { Container, Row, Col } from 'react-grid-system';

export default class Launch extends Component {
    render() {
        return (
            <Container>
            <br/>
            <ProgramLauncher/>
            </Container>
        );
    }
}
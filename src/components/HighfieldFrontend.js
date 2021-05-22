import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { UserConsumer } from '../controllers/UserController';
import Main from './Main';

const HighfieldFrontend = () => {
    return (
        <Container fluid>
            <Row>
                <Col className="bg-dark text-light p-3"><h3 className="mb-0 pb-0">Highfield Technical Test</h3></Col>
            </Row>
            <Container fluid className="px-2 pt-4">
                <UserConsumer>
                    {context => <Main context={context}/>}
                </UserConsumer>
            </Container>
        </Container>
    );
};

export default HighfieldFrontend;
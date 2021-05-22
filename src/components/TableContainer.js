import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { UserConsumer } from '../controllers/UserController';
import ColourTable from './ColourTable';
import UserTable from './UserTable';

function TableContainer() {
    return (
        <div>
            <UserConsumer>
                {context =>
                <Accordion defaultActiveKey="0">
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            User Objects
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body className="userContainer">
                                <UserTable context={context}/>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card className="mt-2">
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                            Top Colours
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body className="topColoursContainer">
                                <ColourTable context={context}/>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>}
            </UserConsumer>
        </div>
    );
}

export default TableContainer;
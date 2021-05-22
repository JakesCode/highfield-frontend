import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import moment from 'moment';
import { Link } from 'react-router-dom';

function UserTable({context}) {
    const [pagination, setPagination] = useState(0);
    const [userResults, setUserResults] = useState();

    const formatDOB = (dob) => {
        let convertedDate = moment(dob);
        return convertedDate.format("LL");
    }

    useEffect(() => {
        setUserResults(context.getUsers(pagination, 10));
    }, [context, pagination])

    return (
        <div className="d-flex flex-column">
            {userResults?.users && <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>DOB</th>
                        <th>Favourite Colour</th>
                    </tr>
                </thead>
                <tbody>
                    {userResults.users.map((user, i) => <tr key={i}>
                        <td><Link to={"/" + user.id}>{user.id}</Link></td>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.email}</td>
                        <td>{formatDOB(user.dob)}</td>
                        <td>{user.favouriteColour}</td>
                    </tr>)}
                </tbody>
            </Table>}

            <div className="pagination">
                <Button variant="outline-dark" disabled={pagination === 0} onClick={() => pagination > 0 && setPagination(pagination - 1)}>&lt;&lt; Previous</Button>
                <span>Page {pagination + 1}</span>
                <Button variant="outline-dark" disabled={!userResults?.anyMore} onClick={() => userResults?.anyMore && setPagination(pagination + 1)}>&gt;&gt; Next</Button>
            </div>
        </div>
    );
}

export default UserTable;
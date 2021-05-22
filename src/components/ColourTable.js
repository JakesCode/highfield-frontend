import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function ColourTable({context}) {
    const [pagination, setPagination] = useState(0);
    const [topColoursResults, setTopColoursResults] = useState();

    useEffect(() => {
        setTopColoursResults(context.getTopColours(pagination, 10));
    }, [context, pagination])

    return (
        <div className="d-flex flex-column">
            {topColoursResults?.topColours && <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Colour</th>
                        <th>Count</th>
                    </tr>
                </thead>
                <tbody>
                    {topColoursResults.topColours.map((topColour, i) => <tr key={i}>
                        <td>{topColour.colour}</td>
                        <td>{topColour.count}</td>
                    </tr>)}
                </tbody>
            </Table>}

            <div className="pagination">
                <Button variant="outline-dark" disabled={pagination === 0} onClick={() => pagination > 0 && setPagination(pagination - 1)}>&lt;&lt; Previous</Button>
                <span>Page {pagination + 1}</span>
                <Button variant="outline-dark" disabled={!topColoursResults?.anyMore} onClick={() => topColoursResults?.anyMore && setPagination(pagination + 1)}>&gt;&gt; Next</Button>
            </div>
        </div>
    );
}

export default ColourTable;
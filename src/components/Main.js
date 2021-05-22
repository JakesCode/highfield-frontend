import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router';
import TableContainer from './TableContainer';
import UserDetails from './UserDetails';

function Main({context}) {
    useEffect(() => {
        if(!context.hasData()) {
            fetch("https://localhost:44399/api/users").then(response => response.json()).then(data => {
                if(data) {
                    context.setData(data);
                }
            })
        }
    }, [context]);

    return (
        context.hasData() &&
        <Switch>
            <Route path="/:id" render={(props) => <UserDetails {...props} context={context}/>}/>
            <Route path="/" exact component={TableContainer}/>
        </Switch>
    );
}

export default Main;
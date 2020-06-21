import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Profile from './pages/profile';
import Logon from './pages/Logon';
import Register from './pages/Register';
import NewIncident from './pages/NewIncident';

export default function Routes(){
    return (

        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Logon} />
            <Route path="/Register" component={Register} />
            <Route path="/Profile" component={Profile} />
            <Route path="/Incidents/new" component={NewIncident} />

        </Switch>
        
        </BrowserRouter>
    );
}
   
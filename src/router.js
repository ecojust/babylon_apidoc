import React from 'react';
import {HashRouter ,Route, Switch} from 'react-router-dom';


import {babylon1} from './pages/babylon/demo1'


import {plane} from './pages/Geometries/plane'




const BasicRoute = () => (
	<HashRouter>
        <Switch>
        	<Route exact path="/babylon1" component={babylon1} />
        	<Route exact path="/plane" component={plane} />

        </Switch>
    </HashRouter>


);


export default BasicRoute;
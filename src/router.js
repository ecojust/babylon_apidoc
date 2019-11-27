import React from 'react';
import {HashRouter ,Route, Switch} from 'react-router-dom';


import {babylon1} from './pages/babylon/demo1'


import {Plane} from './pages/Geometries/Plane'
import {Lines} from './pages/Geometries/Lines'
import {DashedLines} from './pages/Geometries/DashedLines'
import {Ground} from './pages/Geometries/Ground'
import {Box} from './pages/Geometries/Box'
import {Sphere} from './pages/Geometries/Sphere'
import {Disc} from './pages/Geometries/Disc'
import {Cylinder} from './pages/Geometries/Cylinder'
import {Torus} from './pages/Geometries/Torus'
import {TorusKnot} from './pages/Geometries/TorusKnot'
















const BasicRoute = () => (
	<HashRouter>
        <Switch>
        	<Route exact path="/babylon1" component={babylon1} />
        	<Route exact path="/Plane" component={Plane} />
        	<Route exact path="/Lines" component={Lines} />
        	<Route exact path="/DashedLines" component={DashedLines} />
        	<Route exact path="/Ground" component={Ground} />
        	<Route exact path="/Box" component={Box} />
        	<Route exact path="/Sphere" component={Sphere} />
        	<Route exact path="/Disc" component={Disc} />
        	<Route exact path="/Cylinder" component={Cylinder} />
        	<Route exact path="/Torus" component={Torus} />
        	<Route exact path="/TorusKnot" component={TorusKnot} />









        </Switch>
    </HashRouter>


);


export default BasicRoute;
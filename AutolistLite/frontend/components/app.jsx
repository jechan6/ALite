import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomeIndex from './home_index';
import SearchIndex from './search_index';
import VehicleDetails from './vehicle_details';
const App = () => (
    <div>
        <Switch>
            <Route exact path="/" component={HomeIndex}></Route>
            <Route path="/home" component={HomeIndex}></Route>
            <Route path="/search_results/:vin" component={VehicleDetails}></Route>
            <Route path="/search_results" component={SearchIndex}></Route>
        </Switch>

    </div>
);

export default App;
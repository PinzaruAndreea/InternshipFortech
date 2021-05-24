import React  from "react";
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';

import LocationsList from './components/LocationsList';
import Location from './components/Location';


import './App.css';


function App() {
    return <BrowserRouter>
        <Switch>

            <Route exact path={'/'}>
                <LocationsList/>
            </Route>
            <Route path={'/countries/:id'} children={<Location/>}></Route>
            <Route render={() => <Redirect to={{pathname: "/"}}/>}/>
        </Switch>
    </BrowserRouter>
}

export default App;

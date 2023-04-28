import Directors from "./Directors";
import Movies from "./Movies";
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import Actors from './Actors';
import Home from './Home';

function App() {
  
  return <div>
    <NavBar />
    <Switch>
      <Route exact path="/movies">
        <Movies/>
        </Route>
        <Route exact path="/directors">
          <Directors/>
        </Route>
       <Route exact path="/actors">
          <Actors />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
    </Switch>
  </div>;
}

export default App;
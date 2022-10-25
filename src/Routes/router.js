import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


import SignIn from '../screens/Sign'
import { Home } from '../screens/Home';
import { Create_Orden } from '../screens/CreateOrden/index';

export function Routes(){
  return(
    <BrowserRouter>
      <Switch>
          <Route exact path="/" component={SignIn}/>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/newOrder" component={Create_Orden}/>
      </Switch>    
    </BrowserRouter>
  )
}
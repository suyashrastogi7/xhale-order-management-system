import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import '../node_modules/bulma/css/bulma.css'
//Pages
import Dashboard from './Pages/Dashboard'
import Orders from './Pages/Orders';
import Login from './Pages/Login';
import CompletedOrders from './Pages/CompletedOrders'
import WithAuth from './Components/withAuth';
require('dotenv').config()

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <WithAuth exact path='/' component={Dashboard}  />
          <WithAuth exact path='/orders' component={Orders} />
          <WithAuth exact path='/completed-orders' component={CompletedOrders} />
        </Switch>
      </Router>  
    </div>
  );
}


export default App;

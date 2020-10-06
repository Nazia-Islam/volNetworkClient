import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import AdminPanel from './components/AdminPanel/AdminPanel';
import EventTask from './components/EventTask/EventTask';
import PrivateRouteAdmin from './components/PrivateRoute/PrivateRoute';
import PrivateRouteUser from './components/PrivateRoute/PrivateRouteUser';
import Header from './components/Header/Header';

export const myUserContext = createContext();

function App(props) {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <myUserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      
      
      <Router>
        <Header/>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/admin">
            <AdminPanel/>
          </Route>
          <Route path="/eventTask">
            <EventTask />
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/:register">
            <Register />
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/*">
            <NotFound/>
          </Route>
        </Switch>
      </Router>
    </myUserContext.Provider>
  );
}

export default App;


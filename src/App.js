import React from 'react';
import NavBar from './components/NavBar'
import Calendar from './components/Calendar'
import UserCreate from './components/UserCreate';
import Users from './components/Users';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Redirect } from 'react-router';
import CreateLoginPassword from './components/CreateLoginPassword';


function App() {
  return (
    <Router>
    <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/calendar" component={Calendar} />
          <Route path="/users" component={Users} />
          <Route exact path="/usercreate" component={UserCreate} />
          <Route path="/usercreate/login-password" component={CreateLoginPassword} />
      </Switch>
    </div>
    </Router>
  );
}

const HomePage = function() {
  return(
    <div className="home-page">
      <article>
        <h1>hi there!</h1>
        <p>You're now on a page of a Planer React Application using LuxonJS made by Stanislau Stankevich. Create User and Users tabs don't work properly because author of the Backend app hasn't deployed it yet. Calendar tab is okay.  Try it now!</p>
      </article>
      <i className="far fa-calendar-alt"></i>
    </div>
  )
}

export default App;

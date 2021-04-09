import React from 'react';
import Calendar from './components/Calendar';
import UserCreate from './components/UserCreate';
import Users from './components/Users';
import './App.css';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";


function App() {
  return (
    <HashRouter>
    <div className="App">
      <NavLink to="/usercreate"><p>Create User</p></NavLink>
      <NavLink exact to="/users"><p>Users</p></NavLink>
      <NavLink exact to="/calendar"><p>Calendar</p></NavLink>
      <div className="content">
      <Route path="/calendar" component={Calendar}/>
      <Route path="/usercreate" component={UserCreate}/>
      <Route path="/users" component={Users}/>
      </div>
    </div>
    </HashRouter>
  );
}

export default App;

import React from 'react';
import NavBar from './components/NavBar'
import Calendar from './components/Calendar'
import UserCreate from './components/UserCreate';
import Users from './components/Users';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


function App() {
  return (
    <Router>
    <div className="App">
        <NavBar />
        <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/calendar" component={Calendar} />
        <Route path="/users" component={Users} />
        <Route path="/usercreate" component={UserCreate} />
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
        <p>You're now on a page of a Planer made by Stanislau Strankevich and Pavel Klimuk (best planner/calendar application in the world). Try it now!
         Phasellus fringilla velit est. Pellentesque aliquet ullamcorper orci ut volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Nulla sodales ultrices ligula. Nullam eu scelerisque sapien, quis iaculis tortor. Fusce ornare lobortis leo in ornare. 
          Maecenas eu erat at tellus finibus lobortis. Nulla auctor ipsum quis nunc convallis, ut fermentum ex gravida. Mauris lobortis euismod tortor ac vulputate.
           Curabitur accumsan ipsum at nibh venenatis, nec placerat velit commodo. </p>
      </article>
      <i className="far fa-calendar-alt"></i>
    </div>
  )
}

export default App;

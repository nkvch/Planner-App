import React from 'react';

import { Link } from 'react-router-dom';


class NavBar extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
    return (
        <header>
        <i className="far fa-calendar-alt"></i>
          <nav>
              <ul className="links">
                <li><Link to="/"><p>home</p></Link></li>
                  <li><Link to="/calendar"><p>calendar</p></Link></li>
                  <li><Link to="/usercreate"><p>create user</p></Link></li>
                  <li><Link to="/users"><p>users</p></Link></li>
              </ul>
              <Link to="/usercreate/login-password"></Link>
          </nav>
          </header>
      );
    }
}

export default NavBar;
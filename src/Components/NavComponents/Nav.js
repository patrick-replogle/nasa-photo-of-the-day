import React from "react";
import "../../App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const Nav = () => {
    return (
      <Router>
        <div className="nav">
            <ul>
              <li>
                <Link className="links" to="/">Home</Link>
              </li>
              <li>
                <Link className="links" to="/">About</Link>
              </li>
            </ul>
          {/* <Route path="/" exact component={Index} />
          <Route path="/about/" component={About} />
          <Route path="/users/" component={Users} /> */}
        </div>
      </Router>
    );
  }

  export default Nav;
  
import "./App.css";

import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";

import About from "./../Containers/About";
import UseOutsideAlerter from "./../Containers/UseOutsideAlerter";

function App() {
  return (
    <Router>
      <div className="breadcrumb">
        <Link to="/">Home</Link>
      </div>
      <h1>React Code Stuff</h1>
      <main>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/useOutsideAlerter">
            <UseOutsideAlerter />
          </Route>
          <Route path="/">
            <h2>Hooks</h2>
            <ul>
              <li>
                <Link to="/useOutsideAlerter">useOutsideAlerter </Link>
                <i>
                  - Hook that fires a callback when user clicks outside a
                  element.
                </i>
              </li>
            </ul>
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;

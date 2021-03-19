import "./App.css";

import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <h1>React Code Stuff</h1>
      <main>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <ul>
              <li>
                <Link to="/useOutsideAlerter">useOutsideAlerter</Link>
                <i>
                  Hook that fires a callback when user clicks outside a element.
                </i>
              </li>
            </ul>
          </Route>
        </Switch>
        <h2>Hooks</h2>
      </main>
    </Router>
  );
}

export default App;

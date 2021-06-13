import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import HomePage from 'pages/HomePage';
import NoMatchPage from 'pages/NoMatchPage';

import Accordion from 'components/Accordion';

function App() {
  return (
    <>
      <Router>
        <>
          <div className="navbar">
            <ul className="navbar-list">
              <li className="navbar-list__item navbar-list__link">
                <Link to="/">Home</Link>
              </li>

              <li className="navbar-list__item">
                <Accordion
                  renderTitle={() => (
                    <li className="navbar-list__link">
                      <Link to="/js">JavaScript</Link>
                    </li>
                  )}
                >
                  <ul>
                    <li className="navbar-list__link">
                      <Link to="/js/dom">DOM</Link>
                    </li>

                    <li className="navbar-list__link">
                      <Link to="/js/async">Async</Link>
                    </li>

                    <li className="navbar-list__link">
                      <Link to="/js/functions">Functions</Link>
                    </li>
                  </ul>
                </Accordion>
              </li>
            </ul>
          </div>

          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>

            <Route path="*">
              <NoMatchPage />
            </Route>
          </Switch>
        </>
      </Router>
    </>
  );
}

export default App;

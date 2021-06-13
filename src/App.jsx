import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// pages
import HomePage from 'pages/HomePage';
import ReactBasicsPage from 'pages/react/ReactBasicsPage';
import ReactHooksPage from 'pages/react/ReactHooksPage';
import NoMatchPage from 'pages/NoMatchPage';

function App() {
  return (
    <>
      <Router basename="/definitely-not-interview-questions/">
        <>
          <div className="navbar">
            <ul className="navbar-list">
              <li className="navbar-list-item navbar-list__link heading">
                <Link to="/">Home</Link>
              </li>

              <hr className="navbar__border" />

              <li className="navbar-list-block">
                <h3 className="navbar-list__link block-heading">
                  <Link to="/react">React</Link>
                </h3>

                <ul>
                  <li>
                    <h4 className="navbar-list__link heading">
                      <Link to="/react/basics">React Basics</Link>
                    </h4>

                    <ul>
                      <li className="navbar-list__link subheading">
                        <Link to="/react/basics#react-usage-motivation">
                          Why do we need <code className="code-highlight">React</code> at all?
                        </Link>
                      </li>

                      {/* <li className="navbar-list__link subheading">
                        <Link to="/js/async">
                          Why <code className="code-highlight">React</code> and{' '}
                          <code className="code-highlight">ReactDOM</code> in different modules?
                        </Link>
                      </li>

                      <li className="navbar-list__link subheading">
                        <Link to="/js/functions">What is Virtual DOM and how does it work?</Link>
                      </li>

                      <li className="navbar-list__link subheading">
                        <Link to="/js/functions">What is reconciliation and how does it work?</Link>
                      </li>

                      <li className="navbar-list__link subheading">
                        <Link to="/js/dom">Why React asks to use key prop in list components?</Link>
                      </li>

                      <li className="navbar-list__link subheading">
                        <Link to="/js/async">Describe React component lifecycle</Link>
                      </li>

                      <li className="navbar-list__link subheading">
                        <Link to="/js/functions">What is side effect?</Link>
                      </li>

                      <li className="navbar-list__link subheading">
                        <Link to="/js/functions">What is Error Boundary?</Link>
                      </li>

                      <li className="navbar-list__link subheading">
                        <Link to="/js/functions">What is React Lazy?</Link>
                      </li>

                      <li className="navbar-list__link subheading">
                        <Link to="/js/functions">
                          Why <code className="code-highlight">componentWillMount</code>,{' '}
                          <code className="code-highlight">componentWillUpdate</code> and
                          <code className="code-highlight">componentWillReceiveProps</code> were
                          removed?
                        </Link>
                      </li>

                      <li className="navbar-list__link subheading">
                        <Link to="/js/async">What &quot;shouldComponenUpdate&quot; does?</Link>
                      </li>

                      <li className="navbar-list__link subheading">
                        <Link to="/js/functions">
                          What <code className="code-highlight">PureComponent</code> is for ?
                        </Link>
                      </li>

                      <li className="navbar-list__link subheading">
                        <Link to="/js/functions">
                          What is <code className="code-highlight">ErrorBoundary</code> ?
                        </Link>
                      </li> */}
                    </ul>
                  </li>

                  <li>
                    <h4 className="navbar-list__link heading">
                      <Link to="/react/hooks">React Hooks</Link>
                    </h4>

                    <ul>
                      <li className="navbar-list__link subheading">
                        <Link to="/react/hooks#react-hooks-usage-motivation">
                          Why do we need hooks at all?
                        </Link>
                      </li>

                      {/* <li className="navbar-list__link subheading">
                        <Link to="/react/hooks">useState</Link>
                      </li>

                      <li className="navbar-list__link subheading">
                        <Link to="/react/hooks">
                          When you should use callback as useState param?
                        </Link>
                      </li>

                      <li className="navbar-list__link subheading">
                        <Link to="/react/hooks">useEffect</Link>
                      </li>

                      <li className="navbar-list__link subheading">
                        <Link to="/react/hooks">useEffectLayout</Link>
                      </li> */}
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>

            <Route path="/react/basics">
              <ReactBasicsPage />
            </Route>

            <Route path="/react/hooks">
              <ReactHooksPage />
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

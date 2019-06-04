import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './views/Home';
import Resume from './views/Resume';
import Modeling from './views/Modeling';
import Contact from './views/Contact';
import './App.css';
import { 
  CSSTransition, 
  TransitionGroup 
} from 'react-transition-group';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="wrapper">
          <div className="sidenav">
            <li> 
              <Link to="/">HOME</Link>
            </li>
            <li> 
              <Link to="/resume">RESUME</Link>
            </li>
            <li> 
              <Link to="/modeling">PHOTOSHOOTS</Link>
            </li>
            <li> 
              <Link to="/contact">CONTACT</Link>
            </li>
          </div>
          <div className="main">
            <Route render={({location}) => (
              <TransitionGroup>
                <CSSTransition key={location.key} timeout={300} classNames="fade" >
                  <Switch location={location}>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/resume" component={Resume} />
                    <Route exact path="/modeling" component={Modeling} />
                    <Route exact path="/contact" component={Contact} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )} />        
          </div>
        </div>
      </Router>
      <div className="footer">
            <p>© 2019 Harry O'Sullivan Productions. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import About from './pageComponents/about';
import Nav from './pageComponents/nav';
import Home from './pageComponents/home';
import Footer from './pageComponents/footer';
import './App.css';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <div className="page">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home"  component={Home} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

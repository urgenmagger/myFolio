import React from 'react';
import About from './pageComponents/about';
import Folio from './pageComponents/folio';
import Nav from './pageComponents/nav';
import Home from './pageComponents/home';
import SvgOpt from './pageComponents/svgopt';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <div className="page">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/folio" component={Folio} />
            <Route path="/svg_opt" render={() => <SvgOpt state={SvgOpt} />} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

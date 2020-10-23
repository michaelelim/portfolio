import React from 'react';
import './App.scss';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact><Home /></Route>
        <Route path="/about"><About /></Route>
        <Route path="/portfolio"><Portfolio /></Route>
        <Route path="/contact"><Contact /></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

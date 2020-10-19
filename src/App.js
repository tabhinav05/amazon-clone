import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from './components/Header/Header';
import Home from "./pages/Home/Home";
import CheckOut from './pages/Checkout/Checkout';

import './App.css';

function App() {
  return (
    <Router>
    <div className='app'>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/checkout' component={CheckOut} />
      </Switch>

    </div>
    </Router>
  );
}

export default App;

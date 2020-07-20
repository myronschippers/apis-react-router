import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Home from '../pages/Home/Home';
import Inventory from '../pages/Inventory/Inventory';
import Checkout from '../pages/Checkout/Checkout';

class App extends React.Component {
  render() {
    return (
      <div>
          <Router>
            <Header />

            <Route exact path="/" component={Home} />
            <Route path="/inventory" component={Inventory} />
            <Route path="/checkout" component={Checkout} />
          </Router>
        </div>
    );
  }
}

export default App;

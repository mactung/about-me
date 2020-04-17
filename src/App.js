import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './templates/Home';
import Footer from './components/Footer';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const styles = {
    root: {
      background: 'linear-gradient(180deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)',
      height: '100vh',
    }
  }
  return (
    <div style={styles.root}>
      <Router>
        <Header />
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/images">
            Images
          </Route>
          <Route path="/about-us">
            About us
          </Route>
        </Switch>
        <Footer />

      </Router>
    </div>
  );
}

export default App;

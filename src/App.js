import React from 'react';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
function App() {
  return (
    <ThemeProvider>
      <Router>
        <Header />
        <Content />
      </Router>
      <Footer />

    </ThemeProvider>
  );
}

export default App;

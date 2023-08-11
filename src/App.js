import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Home />
        </main>
        <Footer />
      </div>
    </Router>

  );
}

export default App;


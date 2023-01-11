import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home'
import SignUp from './SignUp';

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <Link to='/'> Home </Link>
          <Link to='SignUp'> Sign Up </Link>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='SignUp' element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

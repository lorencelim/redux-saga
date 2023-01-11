import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import SignUp from './component/SignUp';
import SignIn from './component/SignIn';
import { useSelector } from 'react-redux';
import { selectUser } from './component/redux/userSlice';
import SignOut from './component/SignOut';

function App() {

const user = useSelector(selectUser);

  return (
    <div className="App">
      <div>{user ? <SignOut /> : <SignIn />}</div>
      <Router>
        <nav>
          <Link to='/'> Home </Link>
          <Link to='SignUp'> Sign Up </Link>
          <Link to='SignIn'> Sign In</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='SignUp' element={<SignUp />} />
          <Route path='SignIn' element={<SignIn />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

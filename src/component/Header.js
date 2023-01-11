import React from "react";
import Home from "./Home";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from './redux/userSlice';
import SignOut from './SignOut';



function Header() {
    const user = useSelector(selectUser);
    return (
        <div>
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
            <div>{user ? <SignOut /> : null}</div>
    </div>
    )
}

export default Header;
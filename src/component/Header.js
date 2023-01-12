import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from './redux/userSlice';
import Home from "./home";
import SignUp from "./signUp";
import SignIn from "./signIn";
import SignOut from "./signOut";
import Main from "./main"


function Header() {
    const user = useSelector(selectUser);
    return (
        <div className="header">
            <Router>
                <nav>
                    <Link to="/"> Home </Link>
                    <Link to="SignUp"> Sign Up </Link>
                    <Link to="SignIn"> Sign In</Link>
                    <Link to="Main" > Main </Link>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="SignUp" element={<SignUp />} />
                    <Route path="SignIn" element={<SignIn />} />
                    <Route path="Main" element={<Main />} />
                </Routes>
            </Router>
            <div>{user ? <SignOut /> : null}</div>
        </div>
    )
}

export default Header;
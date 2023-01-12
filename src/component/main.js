import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import TruckManagement from "./truckManagement";
import UserManagement from "./userManagement";


function Main(){
    return (
        <div className="m">
            <Router>
                <nav>
                    <Link to='TruckManagement'> Truck Management </Link>
                    <Link to='UserManagement'> User Management </Link>
                </nav>
                <Routes>
                    <Route path='TruckManagement' element={<TruckManagement />} />
                    <Route path='UserManagement' element={<UserManagement />} />
                </Routes>
            </Router>
        </div>
    )
}

export default Main;
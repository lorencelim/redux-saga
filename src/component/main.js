import React from "react";
import { Link, Outlet } from 'react-router-dom';


function Main() {
    return (
        <div className="m">
                <nav>
                    <Link to='/main/truckManagement'> Truck Management </Link>
                    <Link to='main/userManagement'> User Management </Link>
                </nav>
                <Outlet />
        </div>

    )
}

export default Main;
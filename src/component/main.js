import React from "react";
import { BrowserRouter as Link, Outlet } from 'react-router-dom';


function Main() {
    return (
        <div className="m">
                <nav>
                    <Link to='/Main/truckManagement'> Truck Management </Link>
                    <Link to='Main/userManagement'> User Management </Link>
                </nav>
                <Outlet />
        </div>

    )
}

export default Main;
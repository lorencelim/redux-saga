import React from 'react';
import { BrowserRouter as Link, Outlet } from 'react-router-dom';


function Main() {
    return (
        <div className='main'>
                <nav>
                    <Link to='/TruckManagement'> Truck Management </Link>
                    <Link to='/UserManagement'> User Management </Link>
                </nav>
                <Outlet />
        </div>

    )
}

export default Main;
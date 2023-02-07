import React, { useState } from 'react';
import './App.css';
import SignIn from './component/SignIn/SignIn';
import SignUp from './component/SignUp/SignUp';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import TruckManagement from './component/truckManagement/TruckManagement';
import UserManagement from './component/UserManagement/UserManagement';
import AddTruck from './component/truckManagement/AddTruck/AddTruck';


function App() {
  const Redirect = true;
  const [trucks, setTrucks] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path=""
          element={
            Redirect ? (
              <Navigate replace to="/SignIn" />
            ) : (
              null
            )
          } />
        < Route
          path='/SignIn'
          element={<SignIn />}
        />
        <Route
          path='/SignUp'
          element={<SignUp />}
        />
        <Route
          path='/TruckManagement'
          element={
            <TruckManagement
              trucks={trucks}
              setTrucks={setTrucks}
            />} />
        <Route path='/AddTruck'
          element={<AddTruck />}
        />
        <Route
          path='/UserManagement'
          element={<UserManagement />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

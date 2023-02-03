import React, { useState, useEffect } from 'react';
import './App.css';
import SignIn from './component/SignIn/SignIn';
import SignUp from './component/SignUp/SignUp';
import apiRequest from './app/api/dbapi';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TruckManagement from './component/truckManagement/TruckManagement';
import UserManagement from './component/UserManagement/UserManagement';
import axios from './app/api/axios';
import AddTruck from './component/truckManagement/AddTruck/AddTruck';


function App() {
  const [trucks, setTrucks] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
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
        <Route path='/AddTruck' element={
          <AddTruck
            setTrucks={setTrucks}
          />} />
        <Route
          path='/UserManagement'
          element={<UserManagement />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

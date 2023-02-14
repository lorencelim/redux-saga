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

  const cargoType = [
    { value: "Computer", label: "Computer" },
    { value: "Electronics", label: "Electronics" },
    { value: "Vegetables", label: "Vegetables" },
    { value: "Kid Toys", label: "Kid Toys" },
    { value: "Chairs", label: "Chairs" },
    { value: "Tables", label: "Tables" },
    { value: "Fruits", label: "Fruits" },
    { value: "Wires", label: "Wires" },
    { value: "Ices", label: "Ices" },
    { value: "Animals", label: "Animals" },
    { value: "Masks", label: "Masks" }
  ];
  
  const drivers = [
    { value: "Nguyễn Văn A", label: "Nguyễn Văn A" },
    { value: "Nguyễn Văn B", label: "Nguyễn Văn B" },
    { value: "Nguyễn Văn C", label: "Nguyễn Văn C" }
  ];

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
              cargoType={cargoType}
              drivers={drivers}
            />} />
        <Route path='/AddTruck'
          element={
            <AddTruck
              setTrucks={setTrucks}
              cargoType={cargoType}
              drivers={drivers}
            />
          }
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

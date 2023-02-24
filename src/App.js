import React, { useState } from 'react';
import SignIn from './component/SignIn/SignIn';
import SignUp from './component/SignUp/SignUp';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import TruckManagement from './component/TruckManagement/TruckManagement';
import UserManagement from './component/UserManagement/UserManagement';
import AddTruck from './component/TruckManagement/AddTruck/AddTruck';
import { createTheme } from '@mui/material';
import Abc from './Abc';
import User from './component/User/User';
import Account from './component/UserSetting/Account';

function App() {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#ff8f00',
        contrastText: 'white'
      }
    }
  });

  const username = localStorage.getItem("user-Info");

  const cargoTypes = [
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
            username ? (
              <Navigate to={`/${username}/TruckManagement`} />
            ) : (
              <Navigate to="/SignIn" />
            )
          } />
        <Route
          path='/SignIn'
          element={<SignIn
            theme={theme}
          />}
        />
        <Route
          path='/SignUp'
          element={<SignUp
            theme={theme}
          />}
        />
        <Route
          path={`/${localStorage.getItem("user-Info")}`}
          element={<User
            theme={theme}
          />} >
          <Route
            path={`/${localStorage.getItem("user-Info")}/TruckManagement`}
            element={
              <TruckManagement
                cargoTypes={cargoTypes}
                drivers={drivers}
                theme={theme}
              />} />
          <Route path={`/${localStorage.getItem("user-Info")}/AddTruck`}
            element={
              <AddTruck
                cargoTypes={cargoTypes}
                drivers={drivers}
                theme={theme}
              />
            }
          />
          <Route
            path={`/${localStorage.getItem("user-Info")}/UserManagement`}
            element={
              <UserManagement

              />} />
          <Route
            path={`/${localStorage.getItem("user-Info")}/Account`}
            element={
              <Account
                theme={theme}
              />} />
        </Route>
        <Route
          path='/abc'
          element={<Abc
            theme={theme}
          />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import SignIn from "./component/SignIn/SignIn";
import SignUp from "./component/SignUp/SignUp";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import TruckManagement from "./component/TruckManagement/TruckManagement";
import UserManagement from "./component/UserManagement/UserManagement";
import AddTruck from "./component/TruckManagement/AddTruck/AddTruck";
import { createTheme } from "@mui/material";
import Account from "./component/Account/Account";
import Navbar from "./component/Navbar/Navbar";
import AddCargo from "./component/Cargo/AddCargo/AddCargo";
import CargoManagement from "./component/Cargo/CargoManagement";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#ff8f00",
        contrastText: "white"
      }
    }
  });

  const username = localStorage.getItem("user-Info");

  return (
    <BrowserRouter>
      <Routes>
        
        <Route
          path="/SignIn"
          element={<SignIn
            theme={theme}

          />}
        />
        <Route
          path="/SignUp"
          element={<SignUp
            theme={theme}
          />}
        />
        <Route
          path={`/:id`}
          element={<Navbar
            theme={theme}
          />} >
          <Route
            path={`/:id/TruckManagement`}
            element={
              <TruckManagement
                theme={theme}
              />} />
          <Route path={`/:id/AddTruck`}
            element={
              <AddTruck
                theme={theme}
              />} />
          <Route
            path={`/:id/UserManagement`}
            element={
              <UserManagement
              />} />
          <Route
            path={`/:id/CargoManagement`}
            element={
              <CargoManagement
                theme={theme}
              />} />
          <Route
            path={`/:id/AddCargo`}
            element={
              <AddCargo
                theme={theme}
              />} />
          <Route
            path={"/:id/Account"}
            element={
              <Account
                theme={theme}
              />} />
        </Route>
        <Route path="*" element={<Navigate to="SignIn" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import './App.css';
import SignIn from './component/SignIn/SignIn';
import SignUp from './component/SignUp/SignUp';
import apiRequest from './app/api/dbapi';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TruckManagement from './component/truckManagement/TruckManagement';
import UserManagement from './component/UserManagement';
import axios from './app/api/axios';
import AddTruck from './component/truckManagement/AddTruck/AddTruck';


function App() {
  const [trucks, setTrucks] = useState([]);
  const [newTruck, setNewTruck] = useState(axios);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const fetchTrucks = async () => {
      try {
        const response = await axios.get('/trucks');
        setTrucks(response.data);
      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`)
        }
      }
    }
    setTimeout(() => {
      fetchTrucks();
    }, 1000)
  }, [])

  // useEffect(() => {
  //   const filteredResults = trucks.filter((truck) =>
  //     (truck.truck_plate).toLowerCase()).includes(search.toLowerCase());

  //   setSearchResults(filteredResults.reverse());
  // }, [posts, search])

  const handleCheck = async (id) => {
    const listTrucks = trucks.map((truck) =>
      truck.id === id ? { ...truck, checked: !truck.checked } : truck);
    setTrucks(listTrucks);

    const myTruck = listTrucks.filter((truck) => truck.id === id);
    const updateOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'applicaiton/json'
      },
      body: JSON.stringify({ checked: myTruck[0].checked })
    };
    const reqUrl = `${'/trucks'}/${id}`;
    const result = await apiRequest(reqUrl, updateOptions);
    if (result) setFetchError(result);
  }


  const handleEdit = async (id) => {

  }

  const handleDelete = async (id) => {
    try {
      await axios.delete(`trucks/${id}`);
      const listTrucks = trucks.filter(truck => truck.id !== id);
      setTrucks(listTrucks);
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/SignIn' element={<SignIn />} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/TruckManagement' element={
          <TruckManagement
            trucks={trucks}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />} />
        <Route path='/AddTruck' element={
          <AddTruck
            newTruck={newTruck}
            setNewTruck={setNewTruck}
            setTrucks={setTrucks}
          />} />
        <Route path='/UserManagement' element={<UserManagement />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

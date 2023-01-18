import React, { useState, useEffect } from 'react';
import './App.css';
import SignIn from './component/SignIn';
import SignUp from './component/SignUp';
import apiRequest from './app/api/dbapi';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TruckManagement from './component/truckManagement/TruckManagement';
import UserManagement from './component/UserManagement';
import axios from './app/api/axios';

function App() {
  const TRUCKS_URL = '/trucks';
  const [trucks, setTrucks] = useState([]);
  const [newTruck, setNewTruck] = useState('');
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    const fetchTrucks = async () => {
      try {
        const response = await axios.get(TRUCKS_URL,
        {
            headers: { 'Content-Type': 'application/json' },
        });
        if (!response.data) throw Error('Did not receive expected data');
        const listTrucks = await response.data;
        setTrucks(listTrucks);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    setTimeout(() => {
      fetchTrucks();
    }, 1000)
  }, [])
  


  const addTruck = async (truck_plate) => {
    const id = trucks.length ? trucks[trucks.length - 1].id + 1 : 1;
    const myNewTruck = { id, truck_plate };
    const listTrucks = [...trucks, myNewTruck];
    setTrucks(listTrucks);

    const trucksPost = async () => {
      const response = await axios.post(TRUCKS_URL,
        {
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(myNewTruck)
        });
    }
    const result = await apiRequest(TRUCKS_URL, trucksPost);
    if (result) setFetchError(result);
  }

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
    const reqUrl = `${TRUCKS_URL}/${id}`;
    const result = await apiRequest(reqUrl, updateOptions);
    if (result) setFetchError(result);
  }

  const handleDelete = async (id) => {
    const listTrucks = trucks.filter((truck) => truck.id !== id);
    setTrucks(listTrucks);

    const deleteOptions = { method: 'DELETE' };
    const reqUrl = `${TRUCKS_URL}/${id}`;
    const result = await apiRequest(reqUrl, deleteOptions);
    if (result) setFetchError(result);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTruck) return;
    addTruck(newTruck);
    setNewTruck('');
  }


  return (
    <div className="App">
      <main>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<SignIn />} />
              <Route path='/SignUp' element={<SignUp />} />
              <Route path='/TruckManagement' element={
                <TruckManagement trucks={trucks} handleCheck={handleCheck} handleDelete={handleDelete}
                  newTruck={newTruck} setNewTruck={setNewTruck} handleSubmit={handleSubmit}
                  
                />} />
              <Route path='/UserManagement' element={<UserManagement />} />
          </Routes>
        </BrowserRouter>
        {isLoading && <p>Loading Trucks...</p>}
        {fetchError && !isLoading && <p style={{ color: "red" }}>{`Error: ${fetchError}`}</p>}
      </main>
    </div >
  );
}

export default App;

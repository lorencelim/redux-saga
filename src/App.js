import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './component/header';
import Footer from './component/footer';
import apiRequest from './app/api/dbapi';


function App() {
  const API_URL = 'http://localhost:3001/trucks';
  const [trucks, setTrucks] = useState([]);
  const [newTruck, setNewTruck] = useState('');
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    const fetchTrucks = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error('Did not receive expected data');
        const listTrucks = await response.json();
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

  const addTruck = async (truck) => {
    const id = trucks.length ? trucks[trucks.length - 1].id + 1 : 1;
    const myNewTruck = { id, truck };
    const listTrucks = [...trucks, myNewTruck];
    setTrucks(listTrucks);

    const postOptions ={
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(myNewTruck)
    }
    const result = await apiRequest(API_URL, postOptions);
    if (result) setFetchError(result);
  }

  const handleCheck = async (id) => {
    const listTrucks = trucks.map((truck) =>
      truck.id === id ? { ...truck, checked: !truck.checked} : truck);
    setTrucks(listTrucks);

    const myTruck = listTrucks.filter((truck) => truck.id === id);
    const updateOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'applicaiton/json'
      },
      body: JSON.stringify({ checked: myTruck[0].checked})
    };
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, updateOptions);
    if (result) setFetchError(result);
  }

  const handleDelete = async (id) => {
    const listTrucks = trucks.filter((truck) => truck.id !== id);
    setTrucks(listTrucks);

    const deleteOptions = {method: 'DELETE'};
    const reqUrl = `${API_URL}/${id}`;
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
        <Header title='Truck Management'
          trucks={trucks} handleCheck={handleCheck} handleDelete={handleDelete}
          newTruck={newTruck} setNewTruck={setNewTruck} handleSubmit={handleSubmit}
        />
        {isLoading && <p>Loading Trucks...</p>}
        {fetchError && !isLoading && <p style={{ color: "red" }}>{`Error: ${fetchError}`}</p>}
      </main>
      <Footer length={trucks.length} />
    </div >
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import './App.css';
import SignIn from './component/SignIn';
import SignUp from './component/SignUp';
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
  // const [isLoading, setIsLoading] = useState(true);



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



  const addTruck = async (truck_plate) => {
    //     console.log(truck);
    //     const request = {
    //       id: nanoid(), ...truck
    //     };

    //   const response = await axios.post('/trucks', request);
    //   console.log(response);
    //   setTrucks([...trucks, response.data])
    // };


    const id = trucks.length ? trucks[trucks.length - 1].id + 1 : 1;
    const myNewTruck = { id, truck_plate };
    const listTrucks = [...trucks, newTruck];
    setTrucks(listTrucks);

    const postOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTruck)
    }
    const result = await axios.post('/trucks', postOptions);
    if (result) setFetchError(result)
  }

  // if (response.statusText === 'OK') {
  //   setTrucks(listTrucks);
  // } else {
  //   setFetchError(response.status);
  // }


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
    try{
      await axios.delete(`trucks/${id}`);
      const listTrucks = trucks.filter(truck => truck.id !== id);
      setTrucks(listTrucks);
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  }

  // const handleAddFormChange = (e) => {
  //   e.preventDefault();

  //   const fieldName = e.target.getAttribute('name');
  //   const fieldValue = e.target.value;

  //   const newFormData = { ...addFormData };
  //   newFormData[fieldName] = fieldValue;

  //   setAddFormData(newFormData);
  //   console.log(addFormData)
  // };

  // const handleAddFormSubmit = (e) => {
  //   e.preventDefault();
  //   const newTruck1 = {
  //     id: nanoid(),
  //     truck_plate: addFormData.truck_plate,
  //     truck_type: addFormData.truck_type,
  //     cargo_type: addFormData.cargo_type,
  //     driver: addFormData.driver,
  //     price: addFormData.price,
  //     dimension: addFormData.dimension,
  //     parking_address: addFormData.parking_address,
  //     production_year: addFormData.production_year,
  //     status: addFormData.status
  //   };

  //   const newTrucks = [...trucks, newTruck1];
  //   setTrucks(newTrucks);

  // };

  // const onSubmit = async (values, actions) => {
  //   await new Promise((resolve) => setTimeout(resolve, 1000));

  //   if (!newTruck) return;
  //   addTruck(newTruck);
  //   setNewTruck('');
  // }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const id = trucks.length ? trucks[trucks.length - 1].id + 1 : 1;
  //   const newTruck = { id, truck_plate };
  //   try {
  //     const response = await axios.post('/trucks', newTruck);
  //     const allTrucks = [...trucks, response.data];
  //     setTrucks(allTrucks);
  //     setTruck_plate('');

  //   } catch (err) {
  //     console.log(`Error: ${err.message}`);
  //   }
  // }

  return (
    <div className="App">
      <main>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<SignIn />} />
            <Route path='/SignUp' element={<SignUp />} />
            <Route path='/TruckManagement' element={
              <TruckManagement trucks={trucks} handleCheck={handleCheck} handleDelete={handleDelete}
              />} />
            <Route path='/AddTruck' element={
              <AddTruck
                newTruck={newTruck} setNewTruck={setNewTruck} 
              />} />
            <Route path='/UserManagement' element={<UserManagement />} />
          </Routes>
        </BrowserRouter>
        {/* {isLoading && <p>Loading Trucks...</p>}
        {fetchError && !isLoading && <p style={{ color: "red" }}>{`Error: ${fetchError}`}</p>} */}
      </main>
    </div >
  );
}

export default App;

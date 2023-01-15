import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from './redux/userSlice';
import Home from "./home";
import SignUp from "./signUp";
import SignIn from "./signIn";
import SignOut from "./signOut";
import Main from "./main"
import TruckManagement from "./truckManagement";
import UserManagement from "./userManagement";


function Header({ title, trucks, handleCheck, handleDelete,
  newTruck, setNewTruck, handleSubmit,
}) {

  // const [items, setItems] = useState([
  //   {
  //     id: 1,
  //     checked: true,
  //     item: "abc"
  //   },
  //   {
  //     id: 2,
  //     checked: true,
  //     item: "efg"
  //   },
  //   {
  //     id: 3,
  //     checked: false,
  //     item: "zxc"
  //   },
  //   {
  //     id: 4,
  //     checked: false,
  //     item: "opi"
  //   }
  // ]);

  // const [newItem, setNewItem] = useState('')

  // const handleCheck = (id) => {
  //   const listItems = items.map((item) =>
  //     item.id === id ? { ...item, checked: !item.checked } : item);
  //   setItems(listItems);
  //   localStorage.setItem('shoppinglist', JSON.stringify(listItems));
  // }

  // const handleDelete = (id) => {
  //   const listItems = items.filter((item) => item.id !== id);
  //   setItems(listItems);
  //   localStorage.setItem('shoppinglist', JSON.stringify(listItems));
  // }

  // const handleSubmit = (e) => {
  //   console.log('submitted')
  // }

  const user = useSelector(selectUser);
  return (
    <header>
      <div>
        <h1>{title}</h1>
        <Router>
          <nav>
            <Link to="/"> Main </Link>
            <Link to="SignIn"> SignIn </Link>
            <Link to="SignUp"> SignUp </Link>
            <Link to="Home"> Home </Link>
          </nav>
          <Routes>
            <Route path='/' element={<Main />}>
                <Route path='/main/truckManagement' element={
                  <TruckManagement trucks={trucks} handleCheck={handleCheck} handleDelete={handleDelete}
                    newTruck={newTruck} setNewTruck={setNewTruck} handleSubmit={handleSubmit}

                  />
                }> Truck Management </Route>
                <Route path='/main/userManagement' element={<UserManagement />}></Route>
            </Route>
            <Route path='/SignIn' element={<SignIn />}> Sign In </Route>
            <Route path='/SignUp' element={<SignUp />}> Sign Up </Route>
            <Route path='/Home' element={<Home />}> Home </Route>
          </Routes>
        </Router>
        <div>{user ? <SignOut /> : null}</div>
      </div>
    </header>
  )
}

Header.defaultProps = {
  title: "Title"
}


export default Header;
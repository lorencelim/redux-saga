import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from './redux/userSlice';
import SignOut from "./signOut";



function Header({ title, trucks, handleCheck, handleDelete,
  newTruck, setNewTruck, handleSubmit,
  fetchError, setFetchError, isLoading, setIsLoading
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

          <nav>
            <Link to="/SignIn/Main/TruckManagement"> Truck Management</Link>
            <Link to="/SignIn/Main/UserManagement"> User Management</Link>
          </nav>

        <div>{user ? <SignOut /> : null}</div>
      </div>
    </header>
  )
}

Header.defaultProps = {
  title: "Title"
}


export default Header;
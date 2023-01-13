import React, {useState} from 'react';
import './App.css';
import Header from './component/header';
import Footer from './component/footer';

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: true,
      item: "abc"
    },
    {
      id: 2,
      checked: true,
      item: "efg"
    },
    {
      id: 3,
      checked: false,
      item: "zxc"
    },
    {
      id: 4,
      checked: false,
      item: "opi"
    }
  ]);

  const [newItem, setNewItem] = useState('')

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item);
    setItems(listItems);
    localStorage.setItem('shoppinglist', JSON.stringify(listItems));
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem('shoppinglist', JSON.stringify(listItems));
  }

  const handleSubmit = (e) => {
    console.log('submitted')
  }


    return (
      <div className="App">
        <Header title='Truck Management' items={items} handleCheck={handleCheck} handleDelete={handleDelete}/>
        <Footer length={items.length} />
      </div >
    );
  }

  export default App;

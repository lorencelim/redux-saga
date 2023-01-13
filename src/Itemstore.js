// import React, {useState} from 'react'

// const Itemstore = () => {
//     const [items, setItems] = useState([
//         {
//           id: 1,
//           checked: true,
//           item: "abc"
//         },
//         {
//           id: 2,
//           checked: true,
//           item: "efg"
//         },
//         {
//           id: 3,
//           checked: false,
//           item: "zxc"
//         },
//         {
//           id: 4,
//           checked: false,
//           item: "opi"
//         }
//       ]);
    
//       const handleCheck = (id) => {
//         const listItems = items.map((item) =>
//           item.id === id ? { ...item, checked: !item.checked } : item);
//         setItems(listItems);
//         localStorage.setItem('shoppinglist', JSON.stringify(listItems));
//       }
    
//       const handleDelete = (id) => {
//         const listItems = items.filter((item) => item.id !== id);
//         setItems(listItems);
//         localStorage.setItem('shoppinglist', JSON.stringify(listItems));
//       }
//     }

// export default Itemstore
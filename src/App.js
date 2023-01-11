import React from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import { selectUser } from './component/redux/userSlice';
import Header from './component/Header';

function App() {

  const user = useSelector(selectUser);

  return (
    <div className="App">
          <Header />
    </div>
  );
}

export default App;

import React from 'react'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Error from './pages/Error';
import NavBare from './components/NavBare';

function App() {
  return (
    <div className="App">
    <h1>Authentification App</h1>
    <NavBare/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/*' element={<Error/>}/>
    </Routes>
    </div>
  );
}

export default App;

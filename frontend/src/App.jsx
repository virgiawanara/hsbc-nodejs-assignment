import React from 'react';
import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/Home'
import Create from './page/Create';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Create' element={<Create />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;

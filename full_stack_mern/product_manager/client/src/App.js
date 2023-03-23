import './App.css';
import React from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';
import  {Main } from './views/Main';
import { Detail } from './views/Detail';
import { Edit } from './views/Edit';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/products" replace />} />
        <Route path="/products" element={<Main />} />
        <Route path="/products/:id" element={<Detail />} />
        <Route path="/products/edit/:id" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;

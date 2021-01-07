import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dados from './Dados';
import Home from './Home';
import Cadastro from './Cadastro';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Dados" element={<Dados />} />
        <Route path="Cadastro" element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddRecipePage from './pages/AddRecipePage';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/add" element={<AddRecipePage />} />
      </Routes>
    </BrowserRouter>
  );
};

// W PLIKU APP.JSX ZNAJDUJA SIE TYLKO KOMPONENTY, KTÓRE SĄ WYKORZYSTYWANE W PLIKU INDEX.JS
// NIE PISZEMY KODU W APP.JSX

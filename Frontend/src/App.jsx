import React from 'react';
import { BrowserRouter as Routes, Route } from 'react-router-dom';
import AddRecipePage from './pages/AddRecipePage';

export const App = () => {
  return (
    <Routes>
      <Route path="/add" element={<AddRecipePage />} />
    </Routes>
  );
};

// W PLIKU APP.JSX ZNAJDUJA SIE TYLKO KOMPONENTY, KTÓRE SĄ WYKORZYSTYWANE W PLIKU INDEX.JS
// NIE PISZEMY KODU W APP.JSX

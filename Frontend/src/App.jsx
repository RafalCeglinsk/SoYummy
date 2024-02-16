import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddRecipePage from './pages/AddRecipePage';
import { lazy } from 'react';

const FavoritePage = lazy(() => import('pages/FavoritePage'));

export const App = () => {
  return (
    <BrowserRouter basename="/SoYummy/">
      <Routes>
        <Route path="/add" element={<AddRecipePage />} />
        <Route path="/favorite" element={<FavoritePage />} />
      </Routes>
    </BrowserRouter>
  );
};

// W PLIKU APP.JSX ZNAJDUJA SIE TYLKO KOMPONENTY, KTÓRE SĄ WYKORZYSTYWANE W PLIKU INDEX.JS
// NIE PISZEMY KODU W APP.JSX

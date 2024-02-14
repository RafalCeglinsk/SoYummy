import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddRecipePage from './pages/AddRecipePage';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/add" element={<AddRecipePage />} />
      </Routes>
    </Router>
  );
};

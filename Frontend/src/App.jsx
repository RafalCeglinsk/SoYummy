import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddRecipePage from './pages/AddRecipePage';
import { SocialMediaBar } from 'components/SocialMediaBar/SocialMediaBar';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/add" element={<AddRecipePage />} />
      </Routes>
      <div>
        <p>FONT text TEST</p>
        <SocialMediaBar />
      </div>
    </Router>
  );
};
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddRecipePage from './pages/AddRecipePage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/add" element={<AddRecipePage />} />
      </Routes>
    </Router>
  );
};

export default App;

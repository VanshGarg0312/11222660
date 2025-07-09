import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Statistics from './pages/Statistics';
import RedirectPage from './pages/RedirectPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/statistics" element={<Statistics />} />
      <Route path="/:shortcode" element={<RedirectPage />} />
    </Routes>
  );
}
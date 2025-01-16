import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-secondary text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          {/* Add other routes as we create more components */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
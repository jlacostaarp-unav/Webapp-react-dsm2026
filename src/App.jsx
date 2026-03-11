import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function App() {
  return (
    <Router>
      <div className="min-vh-100 d-flex flex-column bg-dark text-white">
        <Navigation />
        
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<MovieDetail />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

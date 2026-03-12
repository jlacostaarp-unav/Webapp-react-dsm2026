import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';
import Favorites from './pages/Favorites';
import Contact from './pages/Contact';
import Legal from './pages/Legal';
import Login from './pages/Login';
import { FavoritesProvider } from './context/FavoritesContext';
import { AuthProvider } from './context/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function App() {
  return (
    <AuthProvider>
      <FavoritesProvider>
        <Router>
          <div className="min-vh-100 d-flex flex-column bg-dark text-white">
            <Navigation />
            
            <main className="flex-grow-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movie/:id" element={<MovieDetail />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/legal" element={<Legal />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </main>

            <Footer />
          </div>
        </Router>
      </FavoritesProvider>
    </AuthProvider>
  );
}

export default App;

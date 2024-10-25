import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Peno from './components/Peno';
import Ammar from './components/Ammar';
import Matthew from './components/Matthew';
import Marvin from './components/Marvin';
import Omed from './components/Omed';
import Nav from './components/Navbar';

function App() {
  return (
    <Router>
      <Nav />
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/peno">Peno</Link>
          <Link to="/ammar">Ammar</Link>
          <Link to="/matthew">Matthew</Link>
          <Link to="/marvin">Marvin</Link>
          <Link to="/omed">Omed</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/peno" element={<Peno />} />
          <Route path="/ammar" element={<Ammar />} />
          <Route path="/matthew" element={<Matthew />} />
          <Route path="/marvin" element={<Marvin />} />
          <Route path="/omed" element={<Omed />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

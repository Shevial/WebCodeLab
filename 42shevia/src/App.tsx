import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Shell00 from './pages/Shell00';
import MainMenu from './components/MainMenu';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta principal con menú */}
        <Route path="/" element={<MainMenu />}>
          {/* Rutas anidadas */}
          <Route path="shell/shell00" element={<Shell00 />} />
          {/* <Route path="c/c00" element={<C00 />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
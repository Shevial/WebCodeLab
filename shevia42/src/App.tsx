import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import Shell from './'
import MainMenu from './components/MainMenu';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>

          <Route path="/" element={<MainMenu/>}/>
          {/* </Routes><Route path="/shell/shell00" element={<Shell00/>}/> */}
          {/*<Route path="/c/c00" element={<C00/>}/> */}
      </Routes>
    </Router>
  );
};

export default App;

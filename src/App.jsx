import './App.css';
import React from 'react';
import Homepage from './Homepage';
import Blog from './blog';
import Kontakt from './Kontakt';
import AboutMe from './AboutMe';
import Skills from './Skills';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/Blog" element={<Blog/>} />
        <Route path="/AboutMe" element={<AboutMe/>} />
        <Route path="/Skills" element={<Skills/>} />
        <Route path="/Kontakt" element={<Kontakt/>} />
      </Routes>
    </Router>
  );
}

export default App;

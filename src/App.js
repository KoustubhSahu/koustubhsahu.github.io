import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Animation from './components/Animation';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="home">
      <h1>Hi all, I'm Koustubh Sahu</h1>
      <p>Software developer with 3+ years of experience in ...</p>
      <a 
        href="https://drive.google.com/uc?export=download&id=10pWSoYCaTUWfeWhIrU7EEk_lkwWNRb-C" 
        className="btn btn-primary"
        download="KoustubhSahu_Resume"
      >
        Download My Resume
      </a>
    </div>
  );
}


export default App;

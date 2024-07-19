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

const Home = () => (
  <div className="home">
    <div className="home-content">
      <div className="summary">
        <h1>Hi all, I'm Koustubh Sahu 👋</h1>
        <p>Software developer with 3+ years of experience in Web Development experience in technologies like Python, JavaScript, Node.js and React.js. I've consistently delivered interactive applications that enhance efficiency, save time, and boost user engagement. I am excited to bring my skills to a dynamic software development team.</p>
        <a href="https://drive.google.com/file/d/10pWSoYCaTUWfeWhIrU7EEk_lkwWNRb-C/view?usp=sharing" 
        className="resume-button" download>Download My Resume</a>
      </div>
      <Animation />
    </div>
  </div>
);


export default App;

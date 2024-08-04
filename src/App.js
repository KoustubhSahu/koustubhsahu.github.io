import React from 'react';
import Navbar from './components/Navbar';
import Animation from './components/Animation';
import Connect from './components/Connect';
import Skills from './components/Skills';
import Background from './components/Background';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />      
      <Skills />
      <Background />
      <Projects />
      <Contact />
    </div>
  );
}

const Home = () => (
  <div className="home section" id="home">
    <div className="home-content">
      <div className="summary align-right">
        <div className="summary-content">
          <h1>Hi, I'm Koustubh Sahu...!</h1>
          <p>Software developer with 3+ years of experience in Web Development experience in technologies like Python, JavaScript, Node.js and React.js. I've consistently delivered interactive applications that enhance efficiency, save time, and boost user engagement. I am excited to bring my skills to a dynamic software development team.</p>
          
          <Connect linkedin="http://www.linkedin.com/in/koustubhsahu" github="https://github.com/KoustubhSahu" contact="contact"
          resume="https://drive.google.com/file/d/10pWSoYCaTUWfeWhIrU7EEk_lkwWNRb-C/view?usp=sharing"/>
          
        </div>
      </div>
      <Animation fileName="home.json"/>
    </div>
    <div id="skills-marker"/>
  </div>
);



export default App;

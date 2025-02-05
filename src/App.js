import React from "react";
import Navbar from "./components/Navbar";
import Animation from "./components/Animation";
import Connect from "./components/Connect";
import Skills from "./components/Skills";
import Background from "./components/Background";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";

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

const keyword = { color: "#6200ea", fontWeight: "500" };
const code = { color: "#758694", fontWeight: "600" };

const Home = () => (
  <div className="home section" id="home">
    <div className="home-content">
      <div className="summary align-right">
        <div className="summary-content">
          <h1>👋 Hi there, I'm Koustubh ...! </h1>
          {/* <p>
          I'm a tech lover who started with a simple <code style={keyword}>Hello World</code> and now builds dynamic, user-friendly web solutions. My journey in coding began with wide-eyed wonder, and guess what? That same excitement still fuels me today.
          <br/><br/>
          With over <strong>3 years</strong> of experience, I’ve become a <strong>problem solver</strong> who thrives on tackling challenges, whether it's debugging tricky issues or crafting seamless interfaces. 
          My go-to tools include <span style={keyword}>JavaScript</span>, <span style={keyword}>React.js</span>, <span style={keyword}>Node.js</span>, and <span style={keyword}>Python</span>. 
          I’ve showcased some of my favorite projects here on the website, where I’ve turned ideas into smart, visually appealing solutions. <strong>Collaboration</strong> is key to my work, and I believe a bit of humor keeps creativity flowing. 
          My curiosity drives me to constantly learn and stay ahead in the fast-paced tech world.
          <br/><br/>
          Let’s connect! I promise there’s never a dull moment when I’m around.
          </p> */}
          <p>
          Ready to unlock the secrets hidden in your data? Think of me as your friendly neighborhood <code style={keyword}>Data Whisperer</code>, a translator between the raw numbers and the insights that drive real change. I’m on a mission to turn mundane spreadsheets into captivating stories, and to make even the most complex data feel… dare I say… fun!
            <br />
            <br />
            With over <strong>3 years</strong> of experience as a Data
            Management Assistant at NJIT and working on diverse projects, I
            bring a blend of technical expertise and creative problem-solving to
            every project. Skilled in building interactive dashboards with
            <span style={keyword}>Power BI</span> and{" "}
            <span style={keyword}>Tableau</span>, automating data pipelines with{" "}
            <span style={keyword}>Python</span>, and querying databases with{" "}
            <span style={keyword}>SQL</span>, I excel at simplifying complex
            information and delivering actionable insights. 
            <br />
            <br />
            Let’s connect and explore how we can use the magic of data to
            achieve amazing things together!
          </p>

          <Connect
            linkedin="http://www.linkedin.com/in/koustubhsahu"
            github="https://github.com/KoustubhSahu"
            contact="contact"
            resume="https://drive.google.com/file/d/10pWSoYCaTUWfeWhIrU7EEk_lkwWNRb-C/view?usp=sharing"
          />
        </div>
      </div>
      <Animation fileName="home.json" />
    </div>
    <div id="skills-marker" />
  </div>
);

export default App;

import { Route, Routes, Link } from "react-router-dom";
import Home from "./routes/Home";
import WorkExamples from "./routes/WorkExamples";
import Certifications from "./routes/Certifications";
import AboutMe from "./routes/AboutMe";
import logo from './assets/logo.png';

function App() {
  return (
    <div className="App">
      <div className="grid-x" >
      <div className="cell">
        <img src={logo} alt="Michael Tuller" />
      </div>
      <div className="cell">
        <nav>
          <ul className="vertical medium-horizontal menu">
            <li><Link to="/"><i className="fi-list"></i> <span>Home</span></Link></li>
            <li><Link to="/aboutme"><i className="fi-list"></i> <span>About Me</span></Link></li>
            <li><Link to="/certifications"><i className="fi-list"></i> <span>Certifications</span></Link></li>
            <li><Link to="/work-examples"><i className="fi-list"></i> <span>Work Examples</span></Link></li>
          </ul>
        </nav>
      </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/work-examples" element={<WorkExamples />} />
        <Route path="/certifications" element={<Certifications />} />
      </Routes>
    </div>
  )
}

export default App

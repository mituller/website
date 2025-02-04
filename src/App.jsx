import { Route, Routes, Link } from "react-router-dom";
import Home from "./routes/Home";
import WorkExamples from "./routes/WorkExamples";
import Certifications from "./routes/Certifications";
import AboutMe from "./routes/AboutMe";
import logo from "./assets/logo.png";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <div>
        <div className="flex flex-row">
          <img src={logo} alt="Michael Tuller" />
        </div>
        <div>
          <nav className="pb-6">
            <ul className="flex flex-row flex-wrap pt-4">
              <li>
                <Link to="/">
                  <i className="fi-list"></i> <span className="p-6">Home</span>
                </Link>
              </li>
              <li>
                <Link to="/aboutme">
                  <i className="fi-list"></i>{" "}
                  <span className="p-6">About Me</span>
                </Link>
              </li>
              <li>
                <Link to="/certifications">
                  <i className="fi-list"></i>{" "}
                  <span className="p-6">Certifications</span>
                </Link>
              </li>
              <li>
                <Link to="/work-examples">
                  <i className="fi-list"></i>{" "}
                  <span className="p-6">Work Examples</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="p-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/work-examples" element={<WorkExamples />} />
          <Route path="/certifications" element={<Certifications />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import WorkExamples from "./routes/WorkExamples";
import Certifications from "./routes/Certifications";
import Resume from "./routes/Resume";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/work-examples" element={ <WorkExamples/> } />
        <Route path="/certifications" element={ <Certifications/> } />
        <Route path="/resume" element={ <Resume/> } />
      </Routes>
    </div>
  )
}

export default App

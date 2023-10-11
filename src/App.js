import Nav from "./components/Nav/Nav";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;

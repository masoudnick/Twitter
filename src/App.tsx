import { Home } from "./pages";
import { NavSidebar } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <>
        <NavSidebar />
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;

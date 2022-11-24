import { Home, Explore } from "./pages";
import { NavSidebar } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <Router>
      <>
        <NavSidebar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;

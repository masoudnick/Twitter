import { Home, Explore, Notifications } from "./pages";
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
          <Route path="/notifications" element={<Notifications />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;

import {
  Home,
  Explore,
  Notifications,
  Verified,
  NotificationsList,
  Mentions,
} from "./pages";
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
          <Route path="/notifications" element={<Notifications />}>
            <Route path="/notifications" element={<NotificationsList />} />
            <Route path="/notifications/verified" element={<Verified />} />
            <Route path="/notifications/mentions" element={<Mentions />} />
          </Route>
        </Routes>
      </>
    </Router>
  );
}

export default App;

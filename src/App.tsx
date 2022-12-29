import {
  Explore,
  Notifications,
  Verified,
  NotificationsList,
  Mentions,
} from "./pages";
import { lazy, Suspense } from "react";
import { NavSidebar, DirectMessage, Preloading } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";

const Home = lazy(() => import("./pages/home"));

function App() {
  return (
    <Suspense fallback={<Preloading />}>
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
          <DirectMessage />
        </>
      </Router>
    </Suspense>
  );
}

export default App;

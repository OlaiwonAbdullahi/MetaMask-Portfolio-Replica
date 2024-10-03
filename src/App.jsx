import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Overview from "./pages/Overview";
import Error from "./pages/404";
import Buy from "./pages/Buy";
//import SideBar from "./components/Navigations/SideBar";

export default function App() {
  return (
    <div className=" font-pop bg-white">
      <Router>
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/error" element={<Error />} />
          <Route path="/buy" element={<Buy />} />
        </Routes>
      </Router>
    </div>
  );
}

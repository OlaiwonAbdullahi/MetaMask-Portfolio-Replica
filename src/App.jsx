import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Overview from "./pages/Overview";
import Error from "./pages/404";
import Buy from "./pages/MoveCrypto/Buy";
import Sell from "./pages/MoveCrypto/Sell";
import Swap from "./pages/MoveCrypto/Swap";
import Bridge from "./pages/MoveCrypto/Bridge";
//import SideBar from "./components/Navigations/SideBar";

export default function App() {
  return (
    <div className=" font-pop bg-white">
      <Router>
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/error" element={<Error />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/swap" element={<Swap />} />
          <Route path="/bridge" element={<Bridge />} />
        </Routes>
      </Router>
    </div>
  );
}

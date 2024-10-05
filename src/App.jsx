import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Overview from "./pages/Overview";
import Error from "./pages/404";
import Buy from "./pages/MoveCrypto/Buy";
import Sell from "./pages/MoveCrypto/Sell";
import Swap from "./pages/MoveCrypto/Swap";
//import BridgePage from "./pages/MoveCrypto/BridgePage";
import Transfer from "./pages/Transfer";
import Send from "./pages/Send";
import BridgePage from "./pages/BridgePage";
import Stake from "./pages/Stake";

export default function App() {
  return (
    <div className="font-pop bg-white">
      <Router>
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/swap" element={<Swap />} />
          <Route path="/transfer" element={<Transfer />} />
          <Route path="/send" element={<Send />} />
          <Route path="/stake" element={<Stake />} />
          <Route path="/bridge" element={<BridgePage />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

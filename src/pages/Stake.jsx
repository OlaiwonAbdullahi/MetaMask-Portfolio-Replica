import { useState } from "react";
//import SideBar from "../components/Navigations/SideBar";
import NavBar from "../components/Navigations/NavBar";

import MoveCrypto from "../components/Navigations/MoveCryptoSidebar";
import SideBar from "../components/Navigations/SideBar";
import StalkCard from "../components/StalkCard";

const Stake = () => {
  const [showMoveCryptoSidebar, setShowMoveCryptoSidebar] = useState(false);

  const handleMoveCryptoClick = () => {
    setShowMoveCryptoSidebar(!showMoveCryptoSidebar);
  };

  return (
    <div className="flex flex-row gap-4">
      <div className="basis-1/4 md:basis-1/6 flex">
        <SideBar
          showMoveCryptoSidebar={showMoveCryptoSidebar}
          onMoveCryptoClick={handleMoveCryptoClick}
        />
        {showMoveCryptoSidebar && <MoveCrypto />}
      </div>

      <div className="basis-3/4 md:basis-5/6">
        <NavBar>Stake</NavBar>
        <StalkCard />
      </div>
    </div>
  );
};

export default Stake;

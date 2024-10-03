import { useState } from "react";
import SideBar from "../../components/Navigations/SideBar";
import NavBar from "../../components/Navigations/NavBar";

import MoveCrypto from "../../components/Navigations/MoveCryptoSidebar";
import Card from "../../components/Card";

const Buy = () => {
  const [showMoveCryptoSidebar, setShowMoveCryptoSidebar] = useState(false);

  const handleMoveCryptoClick = () => {
    setShowMoveCryptoSidebar(!showMoveCryptoSidebar);
  };

  return (
    <div className="flex flex-row gap-4 bg-bgColor">
      <div className="basis-1/4 md:basis-1/6 flex">
        <SideBar
          showMoveCryptoSidebar={showMoveCryptoSidebar}
          onMoveCryptoClick={handleMoveCryptoClick}
        />
        {showMoveCryptoSidebar && <MoveCrypto />}
      </div>

      <div className="basis-3/4 md:basis-5/6">
        <NavBar>Buy</NavBar>
        <Card></Card>
      </div>
    </div>
  );
};

export default Buy;

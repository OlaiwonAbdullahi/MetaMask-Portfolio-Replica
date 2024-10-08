import { useState } from "react";
//import SideBar from "../components/Navigations/SideBar";
import NavBar from "../components/Navigations/NavBar";

import MoveCrypto from "../components/Navigations/MoveCryptoSidebar";
import SideBar from "../components/Navigations/SideBar";
import BridgeCard from "../components/BridgeCard";
import BridgeTotal from "../components/BridgeTotal";

const BridgePage = () => {
  const [showMoveCryptoSidebar, setShowMoveCryptoSidebar] = useState(false);

  const handleMoveCryptoClick = () => {
    setShowMoveCryptoSidebar(!showMoveCryptoSidebar);
  };

  return (
    <div className="flex flex-row gap-4 ">
      <div className="basis-1/4 md:basis-1/6 flex">
        <SideBar
          showMoveCryptoSidebar={showMoveCryptoSidebar}
          onMoveCryptoClick={handleMoveCryptoClick}
        />
        {showMoveCryptoSidebar && <MoveCrypto />}
      </div>

      <div className="basis-3/4 md:basis-5/6 bg-bgColor">
        <NavBar>Bridge</NavBar>
        <BridgeCard />
        <BridgeTotal />
        <div className="  bg-white  w-full max-w-4xl flex justify-center items-center mx-auto rounded-b-md">
          <p className=" text-[10px] whitespace-nowrap text-center">
            By confirming, you agree to
            <span className=" text-btnBg">MetaMask&apos;s Terms of Use</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BridgePage;

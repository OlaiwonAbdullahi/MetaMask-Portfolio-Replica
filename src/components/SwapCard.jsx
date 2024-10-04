import CoinSelect from "./SwapPage/CoinSelect";
import SwapFrom from "./SwapPage/SwapFrom";
import { LuArrowDownUp } from "react-icons/lu";
import SwapTo from "./SwapPage/SwapTo";
import Button from "./Button";
import { RxCaretDown } from "react-icons/rx";
import AdvanceOption from "./SwapPage/AdvanceOption";
import { useState } from "react";

const SwapCard = () => {
  const [showSearch, setShowSearch] = useState(false);

  const openSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <div className="w-1/3 flex flex-col justify-center items-center p-4 gap-4 bg-white mt-10 rounded-xl">
      <CoinSelect />
      <div className="w-full flex justify-end">
        <LuArrowDownUp className="text-2xl text-text font-bold" />
      </div>
      <span className="text-base font-bold self-start">Swap from</span>
      <SwapFrom />
      <span className="text-base font-bold self-start">Swap to</span>
      <SwapTo />
      <span
        onClick={openSearch}
        className=" flex text-primary font-bold gap2 cursor-pointer"
      >
        Advanced Options <RxCaretDown className="h-6 w-6 " />{" "}
      </span>
      {showSearch && <AdvanceOption />}
      <Button>Connect Wallet</Button>
      <span className="text-btnBg text-xs">Terms of Service</span>
    </div>
  );
};

export default SwapCard;

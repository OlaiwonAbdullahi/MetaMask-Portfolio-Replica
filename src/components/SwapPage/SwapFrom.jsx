import { FaEthereum } from "react-icons/fa";
import { RxCaretDown } from "react-icons/rx";
import { useState } from "react";
import TokenSearch from "../TokenSearch";

const SwapFrom = () => {
  const [showSearch, setShowSearch] = useState(false);

  const openSearch = () => {
    setShowSearch(!showSearch);
  };
  return (
    <div className="border border-text rounded-lg flex items-center w-full">
      <button
        onClick={openSearch}
        className="border-r-2 border-r-text w-40 flex flex-col justify-between p-4 font-medium text-xl items-center"
      >
        <div className=" flex gap-3">
          <FaEthereum className="w-8 h-8 text-black" />
          ETH <RxCaretDown className="w-8 h-8 text-text" />
        </div>
        <div className="">{showSearch && <TokenSearch />}</div>
      </button>
      <div className="w-40">
        <input
          type="number"
          className="p-4 focus:outline-none w-full placeholder:text-text h-14"
          placeholder="0"
          aria-label="Amount to Swap"
        />
      </div>
    </div>
  );
};

export default SwapFrom;

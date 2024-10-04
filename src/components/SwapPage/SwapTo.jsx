import { useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import TokenSearch from "../TokenSearch";
const SwapTo = () => {
  const [showSearch, setShowSearch] = useState(false);

  const openSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <button
      onClick={openSearch}
      className="border border-text p-4 flex flex-col rounded-xl w-full  text-text font-medium"
    >
      <div className=" flex gap-2 justify-between">
        <img
          src="https://placehold.co/600"
          alt=""
          className="h-10 w-10 rounded-full"
        />
        <span className="mt-2 whitespace-nowrap"> Select a token</span>

        <RxCaretDown className="h-6 w-6 mt-2" />
      </div>
      <div className=" mt-1">{showSearch && <TokenSearch />}</div>
    </button>
  );
};

export default SwapTo;

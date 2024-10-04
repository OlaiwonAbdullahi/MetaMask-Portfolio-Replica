import { CiViewList } from "react-icons/ci";
import { PiSlidersHorizontal } from "react-icons/pi";
import CoinSelect from "./SwapPage/CoinSelect";
import SwapTo from "./SwapPage/SwapTo";
import { LuArrowDownUp } from "react-icons/lu";
const BridgeCArd = () => {
  return (
    <div>
      <div className=" flex justify-between w-1/2">
        <div className="">
          <h2 className=" font-semibold text-xl">Bridge Tokens</h2>
          <span className="text-sm font-thin text-text">
            Transfer your token from one network to another
          </span>
          {"  "}
          <span className="text-btnBg text-sm">Show More</span>
        </div>
        <div className=" flex gap-3">
          <CiViewList className="h-6 w-6" />
          <PiSlidersHorizontal className="h-6 w-6" />
        </div>
      </div>

      <div className=" w-1/2 flex">
        <span className="text-sm font-semibold">From This Network</span>
        <br />
        <CoinSelect />
        <span className="text-sm font-semibold">You Send</span>
        <SwapTo>Select a token</SwapTo>
      </div>
      <div className="">
        <LuArrowDownUp className="text-2xl text-text font-bold" />
      </div>
      <div className=" w-1/2">
        <span className="text-sm font-semibold">To This Network</span>

        <SwapTo>Select a network</SwapTo>
        <span className="text-sm font-semibold">You Receive</span>
        <input
          type="text"
          className="w-full border border-text rounded-md bg-gray-200 h-20"
          disabled
        />
      </div>
    </div>
  );
};

export default BridgeCArd;

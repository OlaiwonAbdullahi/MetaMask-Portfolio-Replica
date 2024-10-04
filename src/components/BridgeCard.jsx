import { CiViewList } from "react-icons/ci";
import { PiSlidersHorizontal } from "react-icons/pi";
import CoinSelect from "./SwapPage/CoinSelect";
import SwapTo from "./SwapPage/SwapTo";
import { GoArrowSwitch } from "react-icons/go";

const BridgeCArd = () => {
  return (
    <div className="flex flex-col gap-4 items-center bg-white p-4 sm:p-6 rounded-lg shadow-md w-3/4 max-w-4xl mx-auto mt-10">
      <div className="flex justify-between w-full my-4">
        <div className="">
          <h2 className="font-semibold text-xl">Bridge Tokens</h2>
          <span className="text-sm font-light text-text block">
            Transfer your token from one network to another
          </span>
          <span className="text-btnBg text-sm block mt-2 cursor-pointer">
            Show More
          </span>
        </div>
        <div className="flex gap-3">
          <CiViewList className="h-6 w-6 hover:text-btnBg" />
          <PiSlidersHorizontal className="h-6 w-6 hover:text-btnBg" />
        </div>
      </div>

      {/* Swap Section */}
      <div className="w-full flex flex-col md:flex-row justify-between gap-4">
        <div className="basis-full md:basis-1/2">
          <span className="text-sm font-semibold">From This Network</span>
          <CoinSelect />
        </div>
        <div className="basis-full md:basis-1/2">
          <span className="text-sm font-semibold">You Send</span>
          <SwapTo>Select a token</SwapTo>
        </div>
      </div>
      <div className="my-4">
        <GoArrowSwitch className="text-3xl text-text font-bold" />
      </div>

      <div className="w-full flex flex-col md:flex-row justify-between gap-4">
        <div className="basis-full md:basis-1/2">
          <span className="text-sm font-semibold">To This Network</span>
          <SwapTo>Select a network</SwapTo>
        </div>
        <div className="basis-full md:basis-1/2">
          <span className="text-sm font-semibold">You Receive</span>
          <input
            type="text"
            className="w-full border border-text rounded-md bg-gray-200 h-14 md:h-20 p-4"
            disabled
          />
        </div>
      </div>
    </div>
  );
};

export default BridgeCArd;

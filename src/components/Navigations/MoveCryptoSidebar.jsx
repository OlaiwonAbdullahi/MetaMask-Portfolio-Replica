import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { PiSwapLight } from "react-icons/pi";
import { MdOutlineArrowOutward } from "react-icons/md";
import { FiArrowDownLeft } from "react-icons/fi";

import { HiArrowPath } from "react-icons/hi2";
export default function MoveCrypto() {
  return (
    <div className="">
      <div className=" flex gap-2 items-center text-text hover:bg-bgColor w-40 p-2 rounded-md transition-all duration-300 cursor-pointer">
        <GoPlus className="text-xl text-secondary w-10 h-10" />
        <span>Buy</span>
      </div>
      <div className="flex gap-2 items-center text-text hover:bg-bgColor w-40 p-2 rounded-md transition-all duration-300 cursor-pointer">
        <FiMinus />
        <span>Sell</span>
      </div>
      <div className="flex gap-2 items-center text-text hover:bg-bgColor w-40 p-2 rounded-md transition-all duration-300 cursor-pointer">
        <HiArrowPath />

        <span>Swap</span>
      </div>
      <div className="flex gap-2 items-center text-text hover:bg-bgColor w-40 p-2 rounded-md transition-all duration-300 cursor-pointer">
        <PiSwapLight />
        <span>Bridge</span>
      </div>
      <div className="flex gap-2 items-center text-text hover:bg-bgColor w-40 p-2 rounded-md transition-all duration-300 cursor-pointer">
        <MdOutlineArrowOutward />
        <span>Send</span>
      </div>
      <div className="flex gap-2 items-center text-text hover:bg-bgColor w-40 p-2 rounded-md transition-all duration-300 cursor-pointer">
        <PiSwapLight />
        <span>Transfer</span>
      </div>
      <div className="flex gap-2 items-center text-text hover:bg-bgColor w-40 p-2 rounded-md transition-all duration-300 cursor-pointer">
        <FiArrowDownLeft />
        <span>Receive</span>
      </div>
      <div className="flex gap-2 items-center text-text hover:bg-bgColor w-40 p-2 rounded-md transition-all duration-300 cursor-pointer">
        <PiSwapLight />
        <span>Stalk</span>
      </div>
      <div className="flex gap-2 items-center text-text hover:bg-bgColor w-40 p-2 rounded-md transition-all duration-300 cursor-pointer">
        <PiSwapLight />
        <span>Swap</span>
      </div>
    </div>
  );
}

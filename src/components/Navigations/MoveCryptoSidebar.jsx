import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { PiSwapLight } from "react-icons/pi";
import { MdOutlineArrowOutward } from "react-icons/md";
import { FiArrowDownLeft } from "react-icons/fi";

import { HiArrowPath } from "react-icons/hi2";
export default function MoveCrypto() {
  return (
    <div className="">
      <div className="">
        <GoPlus className="text-xl text-black h-20" />
        <span>Buy</span>
      </div>
      <div className="">
        <FiMinus />
        <span>Sell</span>
      </div>
      <div className="">
        <HiArrowPath />

        <span>Swap</span>
      </div>
      <div className="">
        <PiSwapLight />
        <span>Bridge</span>
      </div>
      <div className="">
        <MdOutlineArrowOutward />
        <span>Send</span>
      </div>
      <div className="">
        <PiSwapLight />
        <span>Transfer</span>
      </div>
      <div className="">
        <FiArrowDownLeft />
        <span>Transfer</span>
      </div>
      <div className="">
        <PiSwapLight />
        <span>Stalk</span>
      </div>
      <div className="">
        <PiSwapLight />
        <span>Swap</span>
      </div>
    </div>
  );
}

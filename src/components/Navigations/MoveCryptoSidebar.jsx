import { GoPlus, GoLink } from "react-icons/go";
import { FiMinus, FiArrowDownLeft } from "react-icons/fi";
import { PiSwapLight, PiPlantLight } from "react-icons/pi";
import { MdOutlineArrowOutward } from "react-icons/md";
import { VscLoading } from "react-icons/vsc";
import { HiArrowPath } from "react-icons/hi2";

const ActionButton = ({ Icon, label }) => {
  return (
    <div className="flex gap-2 items-center text-text hover:bg-bgColor z-10 rounded-md transition-all duration-300 cursor-pointer p-4 bg-white w-48 sticky top-0 h-scr">
      <Icon className="text-xl text-text w-6 h-6" />
      <span>{label}</span>
    </div>
  );
};

export default function MoveCrypto() {
  return (
    <div className="font-medium">
      <ActionButton Icon={GoPlus} label="Buy" />
      <ActionButton Icon={FiMinus} label="Sell" />
      <ActionButton Icon={HiArrowPath} label="Swap" />
      <ActionButton Icon={VscLoading} label="Bridge" />
      <ActionButton Icon={MdOutlineArrowOutward} label="Send" />
      <ActionButton Icon={GoLink} label="Transfer" />
      <ActionButton Icon={FiArrowDownLeft} label="Receive" />
      <ActionButton Icon={PiPlantLight} label="Stake" />
      <ActionButton Icon={PiSwapLight} label="Swap" />
    </div>
  );
}

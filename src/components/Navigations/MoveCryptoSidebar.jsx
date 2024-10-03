import { GoPlus, GoLink } from "react-icons/go";
import { FiMinus, FiArrowDownLeft } from "react-icons/fi";
import { PiSwapLight, PiPlantLight } from "react-icons/pi";
import { MdOutlineArrowOutward } from "react-icons/md";
import { VscLoading } from "react-icons/vsc";
import { HiArrowPath } from "react-icons/hi2";
import { Link } from "react-router-dom";

const ActionButton = ({ Icon, label, to }) => {
  return (
    <Link to={to}>
      <div className="flex gap-2 items-center text-text hover:bg-bgColor z-10 rounded-md transition-all duration-300 cursor-pointer p-4 bg-white w-48 sticky top-0">
        <Icon className="text-xl text-text w-6 h-6" />
        <span>{label}</span>
      </div>
    </Link>
  );
};

export default function MoveCrypto() {
  return (
    <div className="font-medium">
      <ActionButton Icon={GoPlus} label="Buy" to="/buy" />
      <ActionButton Icon={FiMinus} label="Sell" to="/sell" />
      <ActionButton Icon={HiArrowPath} label="Swap" to="/swap" />
      <ActionButton Icon={VscLoading} label="Bridge" to="/bridge" />
      <ActionButton Icon={MdOutlineArrowOutward} label="Send" to="/send" />
      <ActionButton Icon={GoLink} label="Transfer" to="/transfer" />
      <ActionButton Icon={FiArrowDownLeft} label="Receive" to="/receive" />
      <ActionButton Icon={PiPlantLight} label="Stake" to="/stake" />
      <ActionButton Icon={PiSwapLight} label="Swap" to="/swap" />
    </div>
  );
}

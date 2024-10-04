import CoinSelect from "./SwapPage/CoinSelect";
import SwapFrom from "./SwapPage/SwapFrom";
import { LuArrowDownUp } from "react-icons/lu";

const SwapCard = () => {
  return (
    <div className="w-1/2 flex flex-col justify-center items-center">
      <CoinSelect />
      <span>
        <LuArrowDownUp className="text-base font-bold text-end" />
      </span>
      <span className="text-base font-bold self-start">Swap from</span>
      <SwapFrom />
    </div>
  );
};

export default SwapCard;

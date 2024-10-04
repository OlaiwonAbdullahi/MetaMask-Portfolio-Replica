import CoinSelect from "./SwapPage/CoinSelect";
import SwapFrom from "./SwapPage/SwapFrom";
import { LuArrowDownUp } from "react-icons/lu";
import SwapTo from "./SwapPage/SwapTo";

const SwapCard = () => {
  return (
    <div className="w-1/3 flex flex-col justify-center items-center p-4 gap-4">
      <CoinSelect />
      <div className="w-full flex justify-end">
        <LuArrowDownUp className="text-2xl text-text font-bold" />
      </div>
      <span className="text-base font-bold self-start">Swap from</span>
      <SwapFrom />
      <span className="text-base font-bold self-start">Swap to</span>
      <SwapTo />
    </div>
  );
};

export default SwapCard;

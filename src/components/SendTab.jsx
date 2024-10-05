import logo from "../assets/metamask-icon.svg";
import SwapTo from "../components/SwapPage/SwapTo";
import Button from "./Button";
const SendTab = () => {
  return (
    <div className=" flex flex-col gap-3">
      <span className="text-sm font-bold self-start">Send from</span>
      <SwapTo> Select Wallet</SwapTo>
      <span className="text-sm font-bold self-start">Send To</span>
      <input
        type="text"
        className=" w-full border border-text rounded-md p-2 text-secondary placeholder:text-secondary focus:outline-none"
        placeholder="Enter public address (0x) or ENS name"
        disabled
      />
      <span className="text-sm font-bold self-start">Asset</span>
      <SwapTo>Select Asset</SwapTo>
      <span className="text-sm font-bold self-start">Amount</span>
      <input
        type="text"
        className=" w-full border border-text rounded-md p-2 text-secondary placeholder:text-secondary focus:outline-none"
        placeholder="0.00"
        disabled
      />
      <div className=" flex justify-center mt-3">
        <Button>
          <span className=" flex gap-2 ">
            <img src={logo} alt="" className=" h-6 w-6" />
            Connect Wallet
          </span>
        </Button>
      </div>
    </div>
  );
};

export default SendTab;

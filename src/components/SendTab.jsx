import SwapTo from "../components/SwapPage/SwapTo";
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
    </div>
  );
};

export default SendTab;

import Exchange from "./SwapPage/Exchange";
import Button from "./Button";

const TransferTab = () => {
  return (
    <div>
      <span className="text-sm font-bold self-start">Transfer From</span>
      <Exchange />
      <span className="text-sm font-bold self-start">Transfer To</span>
      <div className=" flex justify-center">
        <Button>Connect Wallet</Button>
      </div>
    </div>
  );
};

export default TransferTab;

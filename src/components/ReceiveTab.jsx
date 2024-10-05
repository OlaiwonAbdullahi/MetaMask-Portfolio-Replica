import Button from "./Button";
import SwapTo from "./SwapPage/SwapTo";
import logo from "../assets/metamask-icon.svg";

const ReceiveTab = () => {
  return (
    <div>
      <span className="text-sm font-bold self-start">Receive To</span>

      <SwapTo>Select Wallet</SwapTo>
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

export default ReceiveTab;

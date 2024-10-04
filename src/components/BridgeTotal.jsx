import Button from "./Button";

const BridgeTotal = () => {
  return (
    <div className="flex justify-center p-4 bg-white shadow-md rounded-t-md w-full max-w-4xl mx-auto mt-10">
      <div className="flex justify-between w-full items-center p-4">
        {/* Left Side: Total Details */}
        <div className="basis-1/2 flex flex-col items-start gap-2">
          <h2 className="text-sm text-text">Total (send + gas)</h2>
          <span className="text-xl font-bold">$0.00</span>
          <p className="text-xs text-text">Includes a 0.875% MetaMask fee</p>
        </div>

        {/* Right Side: Connect Wallet Button */}
        <div className="basis-1/2 flex flex-col items-end">
          <Button>Connect Wallet</Button>
        </div>
      </div>
    </div>
  );
};

export default BridgeTotal;

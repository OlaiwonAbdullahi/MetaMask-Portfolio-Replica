import Button from "./Button";

const BridgeTotal = () => {
  return (
    <div className=" flex justify-center p-2  bg-white ">
      <div className=" flex justify-betweenw-1/2 items-center p-4">
        <div className="basis-1/2 flex flex-col items-start gap-2">
          <h2 className="text-sm text-text">Total(send + gas)</h2>
          <span className=" text-xl font-bold">$0.00</span>
          <p className="text-xs text-text">Includes a 0.875% MetaMask fee</p>
        </div>
        <div className=" basis-1/2 flex flex-col items-end mr-20">
          <Button>Connect Wallet</Button>
        </div>
      </div>
    </div>
  );
};

export default BridgeTotal;

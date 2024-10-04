import Sell from "../assets/sellimg.png";
import Button from "./Button";
import SellingList from "./SellingList";

const SellCard = () => {
  return (
    <div className="w-full gap-3 sm:w-3/4 md:w-1/2 flex flex-col justify-center text-center items-center  pt-4 p-4 mx-auto mt-20 bg-white rounded-xl border border-secondary ">
      <h2 className="text-2xl font-bold mt-3">Why cash out with MetaMask?</h2>
      <img
        src={Sell}
        alt="Buying cryptocurrency illustration"
        className=" w-2/3"
      />

      <div className="w-full">
        <SellingList />
      </div>
      <div className="">
        <Button> Get Started</Button>
      </div>
    </div>
  );
};

export default SellCard;

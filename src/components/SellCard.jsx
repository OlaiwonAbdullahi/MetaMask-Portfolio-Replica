import Sell from "../assets/sellimg.png";
import Button from "./Button";
import SellingList from "./SellingList";

const SellCard = () => {
  return (
    <div className="w-full gap-3 sm:w-3/4 md:w-1/2 flex flex-col justify-center text-center items-center h-screen pt-4 p-4 mx-auto mt-20 bg-white rounded-xl border border-secondary ">
      <h2 className="text-2xl font-bold mt-3">Buying crypto made easy</h2>
      <img
        src={Sell}
        alt="Buying cryptocurrency illustration"
        className=" w-2/3"
      />
      <h3 className="text-base font-bold text-left">
        Buy crypto how you want, when you want with MetaMask
      </h3>
      <p className="text-sm leading-relaxed mb-4 text-text text-left">
        You're in control when you buy crypto directly in your MetaMask wallet.
        We'll connect you with quotes from trusted providers and guide you along
        the way, making self-custody simple.
      </p>
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

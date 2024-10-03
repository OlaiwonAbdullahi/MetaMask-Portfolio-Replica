import Buy from "../assets/buyimg.png";
import BuyingList from "./BuyingList";

const Card = () => {
  return (
    <div className="w-full sm:w-3/4 md:w-1/2 flex flex-col justify-center text-center items-center h-screen p-4 mx-auto">
      <h2 className="text-2xl font-bold mb-2">Buying crypto made easy</h2>
      <img
        src={Buy}
        alt="Buying cryptocurrency illustration"
        className="mb-4 w-4/5"
      />
      <h3 className="text-base font-bold mb-2 text-left">
        Buy crypto how you want, when you want with MetaMask
      </h3>
      <p className="text-sm leading-relaxed mb-4 text-text">
        You're in control when you buy crypto directly in your MetaMask wallet.
        We'll connect you with quotes from trusted providers and guide you along
        the way, making self-custody simple.
      </p>
      <div className="w-full">
        <BuyingList />
      </div>
    </div>
  );
};

export default Card;

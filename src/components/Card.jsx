import Buy from "../assets/buyimg.png";
import BuyingList from "./BuyingList";
const Card = () => {
  return (
    <div>
      <h2>Why cash out with MetaMask?</h2>
      <img src={Buy} alt="" />
      <h3>Buy crypto how you want, when you want with MetaMask</h3>
      <p>
        You &apos;re in control when you buy crypto directly in your MetaMask
        wallet. We&apos;ll connect you with quotes from trusted providers and
        guide you along the way, making self-custody simple.
      </p>
      <div className="">
        <BuyingList />
      </div>
    </div>
  );
};

export default Card;

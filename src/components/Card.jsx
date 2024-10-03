import Buy from "../assets/buyimg.png";
import BuyingList from "./BuyingList";
const Card = ({ children }) => {
  return (
    <div>
      <h2>Why cash out with MetaMask?</h2>
      <img src={Buy} alt="" />
      <p>{children}</p>
      <div className="">
        <BuyingList />
      </div>
    </div>
  );
};

export default Card;

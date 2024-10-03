import { CgCheck } from "react-icons/cg";

const BuyingList = () => {
  return (
    <div>
      <ul>
        <li className="flex text-text">
          <CgCheck className="w-6 h-6" />
          Access to hundreds of tokens on 15+ chains
        </li>
        <li className="flex">
          <CgCheck className="w-6 h-6" />
          Instantly fund your wallet with secure payment options
        </li>
        <li className="flex">
          <CgCheck className="w-6 h-6" />
          Save on gas fees (and time)!
        </li>
      </ul>
    </div>
  );
};

export default BuyingList;

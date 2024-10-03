import { CgCheck } from "react-icons/cg";

const BuyingList = () => {
  return (
    <div>
      <ul className=" flex flex-col gap-3">
        <li className="flex text-text text-left text-sm">
          <CgCheck className="w-6 h-6 text-black" />
          Access to hundreds of tokens on 15+ chains
        </li>
        <li className="flex  text-text text-left text-sm">
          <CgCheck className="w-6 h-6 text-black" />
          Instantly fund your wallet with secure payment options
        </li>
        <li className="flex  text-text text-left text-sm">
          <CgCheck className="w-6 h-6 text-black" />
          Save on gas fees (and time)!
        </li>
      </ul>
    </div>
  );
};

export default BuyingList;

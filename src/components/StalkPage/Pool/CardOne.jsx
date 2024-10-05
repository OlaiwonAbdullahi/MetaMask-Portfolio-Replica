import { CiCircleQuestion } from "react-icons/ci";
import { FaEthereum } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

const CardOne = () => {
  return (
    <div>
      <div className=" flex justify-between">
        <div className=" flex p-2 text-sm">
          <GoDotFill className="text-red-500" />
          Not Connected
        </div>
        <div className="">
          <CiCircleQuestion />
        </div>
      </div>
      <div className="">
        <span className="text-sm font-bold self-start">Receive To</span>
        <div className=" flex border border-text p-2">
          <div className=" flex">
            <div className="">
              <FaEthereum className="h-6 w-6" />
            </div>
            <div className="">
              <input
                type="text"
                placeholder=" 0 ETH"
                className=" focus:outline-none"
              />
            </div>{" "}
          </div>
          <div className="">$0.00</div>
        </div>
      </div>
    </div>
  );
};

export default CardOne;

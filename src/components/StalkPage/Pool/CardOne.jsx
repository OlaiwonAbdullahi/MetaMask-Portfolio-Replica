import { CiCircleQuestion } from "react-icons/ci";
import { FaEthereum } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { CiCircleInfo } from "react-icons/ci";
import { BiSolidError } from "react-icons/bi";
import Button from "../../Button";
const CardOne = () => {
  return (
    <div className="flex flex-col gap-4 bg-white">
      <div className=" flex justify-between">
        <div className=""></div>
        <div className=" flex p-2 text-sm gap-1">
          <GoDotFill className="text-red-500 mt-1" />
          Not Connected
        </div>
        <div className="">
          <CiCircleQuestion />
        </div>
      </div>
      <div className="">
        <span className="text-sm font-bold self-start">Receive To</span>
        <div className=" flex border bg-gray-200 p-2 w-full rounded-md border-secondary">
          <div className=" flex">
            <div className="">
              <FaEthereum className="h-6 w-6" />
            </div>
            <div className="">
              <input
                type="text"
                placeholder=" 0 ETH"
                className=" focus:outline-none placeholder:text-xl text-xl text-text bg-gray-200"
              />
            </div>
          </div>
          <div className=" text-xl text-text">$0.00</div>
        </div>
        <div className=" flex gap-2">
          {" "}
          <span className=" text-base text-btnBg font-medium">Max: 0.0000</span>
          <CiCircleInfo className=" h-5 w-5" />
        </div>
      </div>
      <div className=" flex flex-col border border-text rounded-md p-3">
        <div className="">
          <span className="text-sm font-bold self-start">Stalking Info</span>
        </div>
        <div className=" flex justify-between text-sm">
          <span className=" flex gap-2">
            Rewards Rate <CiCircleInfo className=" h-5 w-5" />
          </span>
          <span className=" text-green-700">3.2%</span>
        </div>
        <div className=" flex justify-between text-sm">
          <span className=" flex gap-2">Est. annual rewards</span>
          <span className=" text-green-700">--</span>
        </div>
      </div>

      <div className=" flex gap-4 text-black text-sm bg-orange-100 border-l-4 border-l-orange-700 rounded-md p-3">
        <BiSolidError className=" h-7 w-7 text-orange-700" />
        <span>Network is busy and gas prices are higher than usual.</span>
      </div>

      <div className=" flex justify-center">
        <Button>Connect Wallet</Button>
      </div>
    </div>
  );
};

export default CardOne;

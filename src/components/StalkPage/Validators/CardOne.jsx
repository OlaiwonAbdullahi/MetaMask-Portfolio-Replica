import { CiCircleQuestion } from "react-icons/ci";
import { FaEthereum } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { CiCircleInfo } from "react-icons/ci";
import { BiSolidError } from "react-icons/bi";
import Button from "../../Button";
import { useState } from "react";

const CardOne = () => {
  const [range, setRange] = useState(0);

  const handleRangeChange = (e) => {
    const value = Math.max(0, Math.min(3200, Number(e.target.value)));
    setRange(value);
  };

  const decrementRange = () => {
    setRange((prev) => Math.max(0, prev - 1));
  };

  const incrementRange = () => {
    setRange((prev) => Math.min(3200, prev + 1));
  };

  return (
    <div className="flex flex-col gap-4 bg-white p-2 rounded-md">
      <div className="flex justify-between">
        <div className=""></div>
        <div className="flex p-2 text-sm gap-1">
          <GoDotFill className="text-red-500 mt-1" />
          Not Connected
        </div>
        <div className="">
          <CiCircleQuestion />
        </div>
      </div>

      <div className="">
        <span className="text-sm font-bold self-start">Stake</span>
        <div className="flex bg-gray-200 p-2 w-full rounded-md">
          <div className="flex">
            <FaEthereum className="h-10 w-10 mt-2" />
            <div className="ml-2">
              <span className="text-2xl font-medium">ETH</span> <br />
              on Ethereum
            </div>
          </div>
        </div>

        <span className="text-sm font-bold self-start">Amount</span>
        <div className="bg-gray-200 p-2 w-full rounded-md">
          <div className="flex justify-between">
            <span className="text-xl text-text">{range} ETH</span>
            <span className="text-xl text-text">
              ≈${(range * 2000).toFixed(2)}
            </span>
          </div>
          <div className="flex items-center space-x-2 justify-around">
            <button className="text-4xl text-text" onClick={decrementRange}>
              -
            </button>
            <input
              type="range"
              value={range}
              min={0}
              max={3200}
              onChange={handleRangeChange}
              className="w-2/3 h-2 rounded-lg appearance-none bg-gray-300"
              style={{
                height: "10px",
                accentColor: "#4A90E2",
              }}
            />
            <button className="text-4xl text-text" onClick={incrementRange}>
              +
            </button>
          </div>

          <style jsx>{`
            input[type="range"]::-webkit-slider-thumb {
              appearance: none;
              width: 24px;
              height: 24px;
              border-radius: 50%;
              background-color: #4a90e2;
              cursor: pointer;
            }
            input[type="range"]::-moz-range-thumb {
              width: 24px;
              height: 24px;
              border-radius: 50%;
              background-color: #4a90e2;
              cursor: pointer;
            }
          `}</style>
        </div>

        <div className="flex gap-2">
          <span className="text-base text-btnBg font-medium">Max: 0.0000</span>
          <CiCircleInfo className="h-5 w-5" />
        </div>
      </div>

      <div className="flex flex-col border border-text rounded-md p-3">
        <div className="">
          <span className="text-sm font-bold self-start">Staking Info</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="flex gap-2">
            Rewards Rate <CiCircleInfo className="h-5 w-5" />
          </span>
          <span className="text-green-700">3.2%</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="flex gap-2">Est. annual rewards</span>
          <span className="text-green-700">--</span>
        </div>
      </div>

      <div className="flex gap-4 text-black text-sm bg-orange-100 border-l-4 border-l-orange-700 rounded-md p-3">
        <BiSolidError className="h-7 w-7 text-orange-700" />
        <span>Network is busy and gas prices are higher than usual.</span>
      </div>

      <div className="flex justify-center">
        <Button>Connect Wallet</Button>
      </div>
    </div>
  );
};

export default CardOne;

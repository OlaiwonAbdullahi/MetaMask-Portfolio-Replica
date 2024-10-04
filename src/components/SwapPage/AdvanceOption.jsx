import { FiInfo } from "react-icons/fi";

const AdvanceOption = () => {
  return (
    <div className="flex gap-4">
      <div className="font-bold">
        Slippage<br></br> Tolerance
      </div>
      <div className="">
        <FiInfo className=" w-8 h-8" />
      </div>
      <div className=" bg-btnBg w-18 flex justify-center p-2 rounded-full text-sm h-8 items-center">
        2%
      </div>
      <div className="  bg-white border border-text w-18 flex justify-center p-2 rounded-full text-sm h-8 items-center">
        3%
      </div>
      <div className="  bg-white border border-text w-20 flex justify-center p-2 rounded-full text-sm h-8 items-center">
        Custom
      </div>
    </div>
  );
};

export default AdvanceOption;

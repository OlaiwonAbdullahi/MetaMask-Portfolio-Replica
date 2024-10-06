import { BsBoxArrowUpRight } from "react-icons/bs";
const CardTwo = () => {
  return (
    <div className=" flex w-full bg-white h-52 border border-secondary rounded-lg p-2 gap-3">
      <div className=" basis-3/4">
        <iframe src=" " frameborder="0"></iframe>
      </div>
      <div className=" basis-1/4">
        <span className="text-xl font-bold self-start">Stalking Info</span>
        <p>Stake any amount of ETH. Earn rewards. Unstake at any time.</p>
        <span className="text-btnBg flex gap-2 p-1">
          Learn More <BsBoxArrowUpRight className="text-btnBg text-xs mt-1" />
        </span>
      </div>
    </div>
  );
};

export default CardTwo;

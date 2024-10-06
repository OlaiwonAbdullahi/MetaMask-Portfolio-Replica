import { BsBoxArrowUpRight } from "react-icons/bs";
const CardTwo = () => {
  return (
    <div className=" flex w-full bg-white h-72  rounded-lg p-4">
      <div className=" basis-2/3">
        <iframe
          width="450"
          height="253"
          src="https://www.youtube.com/embed/eHEymH5s97o?si=j-1bjdcBaEYHV1TG"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <div className=" basis-1/3 p-2">
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

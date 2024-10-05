import { CiCircleQuestion } from "react-icons/ci";
import { GoDotFill } from "react-icons/go";

const CardOne = () => {
  return (
    <div>
      <div className="">
        <div className="">
          {" "}
          <GoDotFill />
          Not Connected
        </div>
        <div className="">
          <CiCircleQuestion />
        </div>
      </div>
      <div className="">
        <span className="text-sm font-bold self-start">Receive To</span>
        <div className="">
          <div className=""></div>
          <input type="text" placeholder=" 0 ETH" />
          <div className="">$0.00</div>
        </div>
      </div>
    </div>
  );
};

export default CardOne;

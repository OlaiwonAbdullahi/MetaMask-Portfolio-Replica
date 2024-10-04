import { CiViewList } from "react-icons/ci";
import { PiSlidersHorizontal } from "react-icons/pi";
const BridgeCArd = () => {
  return (
    <div>
      <div className="">
        <div className="">
          <h2>Bridge Tokens</h2>
          <span>Transfer your token from one network to another</span>
          <span>Show More</span>
        </div>
        <div className="">
          <CiViewList />
          <PiSlidersHorizontal />
        </div>
      </div>
    </div>
  );
};

export default BridgeCArd;

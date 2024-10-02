import { BiGridHorizontal } from "react-icons/bi";
import Logo from "../logo.jsx";
import { RiNftFill } from "react-icons/ri";
import { MdOutlineStars } from "react-icons/md";
import { PiJoystickLight } from "react-icons/pi";
import { LiaHubspot } from "react-icons/lia";
import { BsGrid1X2 } from "react-icons/bs";

const SideBar = () => {
  return (
    <div>
      <div className="">
        <Logo />
      </div>
      <div className=" justify-start flex flex-col">
        <div className="">
          <BsGrid1X2 />
          <span>OverView</span>
        </div>
        <BiGridHorizontal />
        <div className="">
          <RiNftFill />
          NFTs
        </div>
        <div className="">
          <MdOutlineStars />
          <span>Token</span>
        </div>
        <div className="">
          <LiaHubspot />
          <span>dapp</span>
        </div>
        <div className="">
          <PiJoystickLight />
          <span>Games</span>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

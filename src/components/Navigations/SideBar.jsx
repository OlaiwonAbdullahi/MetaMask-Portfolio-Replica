import { BiGridHorizontal } from "react-icons/bi";
import Logo from "../logo.jsx";
import { RiNftFill } from "react-icons/ri";
import { GiToken } from "react-icons/gi";
import { PiJoystickLight } from "react-icons/pi";

const SideBar = () => {
  return (
    <div>
      <div className="">
        <Logo />
      </div>
      <div className=" justify-start flex flex-col">
        <span className="text-base">Overview</span>

        <BiGridHorizontal />
        <RiNftFill />
        <GiToken />
        <PiJoystickLight />
      </div>
    </div>
  );
};

export default SideBar;

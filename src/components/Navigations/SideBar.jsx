import Logo from "../logo.jsx";
import { RiNftFill } from "react-icons/ri";
import { MdOutlineStars } from "react-icons/md";
import { PiJoystickLight } from "react-icons/pi";
import { LiaHubspot } from "react-icons/lia";
import { BsGrid1X2 } from "react-icons/bs";
import { RiTokenSwapLine } from "react-icons/ri";
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import MoveCrypto from "./MoveCryptoSidebar.jsx";

const SideBar = () => {
  return (
    <div className="">
      <div className="p-4 bg-white w-48 sticky top-0 h-screen flex flex-col justify-between">
        <div className="mb-8">
          <Logo />
        </div>

        <div className="flex flex-col gap-4">
          <Link to="/">
            <div className="flex gap-2 items-center text-text hover:bg-bgColor w-40 p-2 rounded-md transition-all duration-300 cursor-pointer">
              <BsGrid1X2 className="text-xl" />
              <span>Overview</span>
            </div>
          </Link>
          <div className="flex gap-2 items-center text-text hover:bg-bgColor w-40 p-2 rounded-md transition-all duration-300 cursor-pointer">
            <RiTokenSwapLine className="text-xl" />
            <span className="whitespace-nowrap flex ">
              Move Crypto <MdOutlineKeyboardArrowRight className=" mt-1" />
            </span>
          </div>

          <div className="flex gap-2 items-center text-text hover:bg-bgColor w-40 p-2 rounded-md transition-all duration-300 cursor-pointer">
            <MdOutlineStars className="text-xl" />
            <span>Token</span>
          </div>

          <div className="flex gap-2 items-center text-text hover:bg-bgColor w-40 p-2 rounded-md transition-all duration-300 cursor-pointer">
            <RiNftFill className="text-xl" />
            <span>NFTs</span>
          </div>

          <div className="flex gap-2 items-center text-text hover:bg-bgColor w-40 p-2 rounded-md transition-all duration-300 cursor-pointer">
            <LiaHubspot className="text-xl" />
            <span>Dapp</span>
          </div>

          <div className="flex gap-2 items-center text-text hover:bg-bgColor w-40 p-2 rounded-md transition-all duration-300 cursor-pointer">
            <PiJoystickLight className="text-xl" />
            <span>Games</span>
          </div>
        </div>

        <div>
          <hr className="border-gray-300 mb-4" />

          <span className="flex p-2 gap-2 text-sm text-text">
            Terms of Use <HiMiniArrowTopRightOnSquare className="mt-1" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

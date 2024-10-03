import Logo from "../logo.jsx";
import { RiNftFill } from "react-icons/ri";
import { MdOutlineStars } from "react-icons/md";
import { PiJoystickLight } from "react-icons/pi";
import { LiaHubspot } from "react-icons/lia";
import { BsGrid1X2 } from "react-icons/bs";
import { CgGenderMale } from "react-icons/cg";
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";
import { RiTokenSwapLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";

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
            <CgGenderMale className="text-xl" />
            <span className="whitespace-nowrap flex ">
              Move Crypto
              <RiTokenSwapLine className=" mt-1" />
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

      <MoveCrypto />
    </div>
  );
};

export default SideBar;

function MoveCrypto() {
  return (
    <div className="">
      <div className="">
        <GoPlus />
        <span>Buy</span>
      </div>
      <div className="">
        <FiMinus />
        <span>Buy</span>
      </div>
    </div>
  );
}

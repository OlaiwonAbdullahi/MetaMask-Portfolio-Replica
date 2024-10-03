import Logo from "../logo.jsx";
import { RiNftFill } from "react-icons/ri";
import { MdOutlineStars, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { PiJoystickLight } from "react-icons/pi";
import { LiaHubspot } from "react-icons/lia";
import { BsGrid1X2 } from "react-icons/bs";
import { RiTokenSwapLine } from "react-icons/ri";
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="p-4 bg-white w-48 sticky top-0 h-screen flex flex-col justify-between">
      <div className="mb-8">
        <Logo />
      </div>

      <div className="flex flex-col gap-4">
        <Link to="/">
          <div
            className="flex gap-2 items-center text-text hover:bg-bgColor w-40 p-2 rounded-md transition-all duration-300 cursor-pointer"
            aria-label="Overview"
          >
            <BsGrid1X2 className="text-xl" />
            <span>Overview</span>
          </div>
        </Link>

        <Link to="/move-crypto">
          <div
            className="flex gap-2 items-center text-text hover:bg-bgColor w-40 p-2 rounded-md transition-all duration-300 cursor-pointer"
            aria-label="Move Crypto"
          >
            <RiTokenSwapLine className="text-xl" />
            <span className="whitespace-nowrap flex">
              Move Crypto <MdOutlineKeyboardArrowRight className="mt-1" />
            </span>
          </div>
        </Link>

        <Link to="/tokens">
          <div
            className="flex gap-2 items-center text-text hover:bg-bgColor w-40 p-2 rounded-md transition-all duration-300 cursor-pointer"
            aria-label="Tokens"
          >
            <MdOutlineStars className="text-xl" />
            <span>Token</span>
          </div>
        </Link>

        <Link to="/nfts">
          <div
            className="flex gap-2 items-center text-text hover:bg-bgColor w-40 p-2 rounded-md transition-all duration-300 cursor-pointer"
            aria-label="NFTs"
          >
            <RiNftFill className="text-xl" />
            <span>NFTs</span>
          </div>
        </Link>

        <Link to="/dapp">
          <div
            className="flex gap-2 items-center text-text hover:bg-bgColor w-40 p-2 rounded-md transition-all duration-300 cursor-pointer"
            aria-label="Dapp"
          >
            <LiaHubspot className="text-xl" />
            <span>Dapp</span>
          </div>
        </Link>

        <Link to="/games">
          <div
            className="flex gap-2 items-center text-text hover:bg-bgColor w-40 p-2 rounded-md transition-all duration-300 cursor-pointer"
            aria-label="Games"
          >
            <PiJoystickLight className="text-xl" />
            <span>Games</span>
          </div>
        </Link>
      </div>

      <div>
        <hr className="border-gray-300 mb-4" />

        <a
          href="/terms-of-use"
          className="flex p-2 gap-2 text-sm text-text hover:underline"
          aria-label="Terms of Use"
        >
          Terms of Use <HiMiniArrowTopRightOnSquare className="mt-1" />
        </a>
      </div>
    </div>
  );
};

export default SideBar;

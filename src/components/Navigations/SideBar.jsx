import Logo from "../logo.jsx";
import { RiNftFill } from "react-icons/ri";
import { MdOutlineStars } from "react-icons/md";
import { PiJoystickLight } from "react-icons/pi";
import { LiaHubspot } from "react-icons/lia";
import { BsGrid1X2 } from "react-icons/bs";
import { CgGenderMale } from "react-icons/cg";

const SideBar = () => {
  return (
    <div className="p-4 bg-white w-48 sticky top-0 h-screen flex flex-col justify-between">
      {/* Logo Section */}
      <div className="mb-8">
        <Logo />
      </div>

      {/* Sidebar Links */}
      <div className="flex flex-col gap-4">
        <div className="flex gap-2 items-center text-text hover:bg-bgColor w-40 p-2 rounded-md transition-all duration-300 cursor-pointer">
          <BsGrid1X2 className="text-xl" />
          <span>Overview</span>
        </div>

        <div className="flex gap-2 items-center text-text hover:bg-bgColor w-40 p-2 rounded-md transition-all duration-300 cursor-pointer">
          <CgGenderMale className="text-xl" />
          <span className="whitespace-nowrap">Move Crypto</span>
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

      {/* Divider Section */}
      <div>
        <hr className="border-gray-300 mb-4" />
        {/* You can add additional footer links or content here in the future */}
      </div>
    </div>
  );
};

export default SideBar;

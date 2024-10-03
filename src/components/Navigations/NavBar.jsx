import { RiGasStationFill } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import Button from "../Button";
import Search from "../Search";

const NavBar = ({ children }) => {
  return (
    <div className="flex flex-row justify-between bg-bgColor h-24 border-b-2 border-b-secondary pt-5 px-4">
      <div className="">
        <h2 className="text-2xl font-bold mt-3">{children}</h2>
      </div>
      <div className=" flex gap-3 p-1">
        <Search />
        <div className="flex items-center hover:text-btnBg hover:bg-secondary h-10 p-2 hover:rounded-md transition-all duration-300 ease-in-out">
          <RiGasStationFill className="h-6" />
          <span className="text-sm ml-1">18</span>
        </div>
        <div className="h-10 hover:h-8 hover:text-btnBg hover:bg-secondary hover:rounded-md p-2 transition-all duration-300 ease-in-out">
          <IoMdNotificationsOutline className="h-6" />
        </div>

        <Button>Connect MetaMask</Button>
      </div>
    </div>
  );
};

export default NavBar;

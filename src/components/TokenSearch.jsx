import { IoIosSearch } from "react-icons/io";
const TokenSearch = () => {
  return (
    <div className="rounded-md flex border h-10 w-72 p-2 border-secondary mt-1 z-10">
      <div className="">
        <IoIosSearch className="h-6 text-slate-600" />
      </div>
      <input
        type="text"
        placeholder="Search For a token or Paste Address"
        className=" text-base text-primary placeholder:text-primary placeholder:text-sm focus:outline-none p-2 bg-white"
      />
    </div>
  );
};

export default TokenSearch;

import { IoIosSearch } from "react-icons/io";
const Search = () => {
  return (
    <div className="rounded-md flex border-2 h-10 w-72 p-2 border-secondary mt-1">
      <div className="">
        <IoIosSearch className="h-6 text-slate-600" />
      </div>
      <input
        type="text"
        placeholder="Search For a token"
        className="bg-bgColor text-base text-primary placeholder:text-primary"
      />
    </div>
  );
};

export default Search;

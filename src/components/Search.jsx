import { IoIosSearch } from "react-icons/io";
const Search = () => {
  return (
    <div className="rounded-md">
      <div className="">
        <IoIosSearch />
      </div>
      <input type="text" placeholder="Search For a token" />
    </div>
  );
};

export default Search;

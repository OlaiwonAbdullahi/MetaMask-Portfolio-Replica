import Button from "../Button";

const NavBar = () => {
  return (
    <div className="flex flex-row justify-between bg-bgColor h-24 border-b-2 border-b-secondary pt-5 px-4">
      <div className="">
        <h2 className="text-2xl font-bold mt-3">Tokens</h2>
      </div>
      <div className="">
        <Button />
      </div>
    </div>
  );
};

export default NavBar;

import Button from "../Button";

const Header = () => {
  return (
    <div className="flex flex-row justify-between bg-bgColor h-24 border-b-2 border-b-secondary pt-5 px-4 top-0">
      <div className="">
        <h2 className="text-2xl font-bold mt-3">Dashboard</h2>
      </div>
      <div className="">
        <Button>Connect MetaMask</Button>
      </div>
    </div>
  );
};

export default Header;

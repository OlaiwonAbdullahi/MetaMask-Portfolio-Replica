import Button from "./Button";

const Header = () => {
  return (
    <div className="flex justify-around">
      <div className="">
        <h2>Dashboard</h2>
      </div>
      <div className="">
        <Button />
      </div>
    </div>
  );
};

export default Header;

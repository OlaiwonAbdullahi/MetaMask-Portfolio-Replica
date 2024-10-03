import Button from "./Button";
import Footer from "../assets/footerimg.jpg";

const Explore = () => {
  return (
    <div className="bg-bgColor text-center flex flex-col justify-center items-center pt-44 gap-3">
      <div>
        <h2 className="text-5xl font-semibold mb-4">
          Self-custody is easy with <br /> MetaMask Portfolio
        </h2>
        <p className="text-base max-w-lg mx-auto mb-6">
          MetaMask is the leading self-custodial wallet. The safe and simple way
          to access blockchain applications and web3. Trusted by millions of
          users worldwide.
        </p>
        <div className="flex justify-center">
          <Button>Explore Web3</Button>
        </div>
      </div>
      <div className=" self-end ">
        <img src={Footer} alt="" className="" />
      </div>
    </div>
  );
};

export default Explore;

import heroimg1 from "../assets/heroimg1.webp";
import heroimg2 from "../assets/heroimg2.webp";
const Hero = () => {
  return (
    <div className=" flex justify-between">
      <div>
        <img src={heroimg1} alt="" />
      </div>
      <div className="">
        <div className="">
          <h2>Get started with MetaMask Portfolio</h2>
          <p>
            Get a clear, comprehensive view of your accounts and wallets, across
            all networks. Connect a MetaMask wallet or watch any Ethereum
            address.
          </p>
        </div>
        <div className=""></div>
      </div>
      <div className="">
        <img src={heroimg2} alt="" />
      </div>
    </div>
  );
};

export default Hero;

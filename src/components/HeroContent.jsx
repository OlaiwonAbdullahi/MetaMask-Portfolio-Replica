import Button from "./Button";

const HeroContent = () => {
  return (
    <div className="flex flex-col text-center justify-center mx-auto items-center my-auto h-screen">
      <div>
        <h2 className="text-4xl font-semibold">
          Get started with MetaMask Portfolio
        </h2>
        <p className="text-base mt-4">
          Get a clear, comprehensive view of your accounts and wallets, across
          all networks. Connect a MetaMask wallet or watch any Ethereum address.
        </p>
      </div>
      <div className="flex mt-6 space-x-4">
        <Button />
        <Button>Connect MetaMask</Button>
      </div>
    </div>
  );
};

export default HeroContent;

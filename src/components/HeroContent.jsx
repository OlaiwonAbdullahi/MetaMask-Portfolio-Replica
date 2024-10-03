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
        <button className="bg-bgColor border border-text text-text sm:px-3 md:px-4 py-3 rounded-full text-center text-xs sm:text-sm md:text-sm h-8 sm:h-10 md:h-12 w-24 sm:w-36 md:w-36 lg:w-44  hover:bg-opacity-90 transition-all duration-300 ease-in-out whitespace-nowrap  font-pop">
          Watch a Address
        </button>
        <Button>Connect MetaMask</Button>
      </div>
    </div>
  );
};

export default HeroContent;

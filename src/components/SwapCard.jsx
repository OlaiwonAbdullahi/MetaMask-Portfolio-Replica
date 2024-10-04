import CoinSelect from "./CoinSelect";

const SwapCard = () => {
  return (
    <div className="w-1/2 flex flex-col justify-center items-center">
      <CoinSelect />
      <span className="text-base font-bold self-start">Swap from</span>
    </div>
  );
};

export default SwapCard;

import { RxCaretDown } from "react-icons/rx";
const SwapTo = () => {
  return (
    <div className="border border-text p-4 flex rounded-xl w-full justify-between text-text font-medium">
      <img
        src="https://placehold.co/600"
        alt=""
        className="h-10 w-10 rounded-full"
      />
      Select a token <RxCaretDown className="h-6 w-6" />
    </div>
  );
};

export default SwapTo;

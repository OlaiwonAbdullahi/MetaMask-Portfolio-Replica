import Ramp from "../assets/ramp.jpg";
import Move from "../assets/move.jpg";
import Defi from "../assets/defi.jpg";
import Button from "./Button";
const Feature = () => {
  return (
    <div className=" flex border bg-bgColor">
      <div className=" border p-3 w-full text-center flex flex-col items-center gap-4">
        <img src={Ramp} alt="" className="w-11/12" />
        <h2 className="text-2xl font-bold">Easily on-ramp or off-ramp</h2>
        <p className="text-sm">
          Convert cash to crypto or crypto for cash while maintaining control of
          your assets, no centralized exchange necessary.
        </p>
        <Button>Buy Crypto</Button>
      </div>

      <div className=" border p-3 w-full text-center flex flex-col items-center gap-4">
        <img src={Move} alt="" className="w-11/12" />
        <h2 className="text-2xl font-bold mt-9">
          Move your crypto almost anywhere
        </h2>
        <p className="text-sm">
          Convert cash to crypto or crypto for cash while maintaining control of
          your assets, no centralized exchange necessary.
        </p>
        <Button>Send Crypto</Button>
      </div>

      <div className=" border p-3 w-full text-center flex flex-col items-center gap-4">
        <img src={Defi} alt="" className="w-11/12" />
        <h2 className="text-2xl font-bold">
          Diversify your portfolio with DeFi
        </h2>
        <p className="text-sm">
          Convert cash to crypto or crypto for cash while maintaining control of
          your assets, no centralized exchange necessary.
        </p>
        <Button>Stalk Crypto</Button>
      </div>
    </div>
  );
};

export default Feature;

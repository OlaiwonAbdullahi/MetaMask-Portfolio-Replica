import Ramp from "../assets/ramp.jpg";
import Move from "../assets/move.jpg";
import Defi from "../assets/defi.jpg";
import Button from "./Button";
const Feature = () => {
  return (
    <div className=" flex border bg-bgColor pt-3">
      <div className="">
        <img src={Ramp} alt="" className="" />
        <h2>Easily on-ramp or off-ramp</h2>
        <p>
          Convert cash to crypto or crypto for cash while maintaining control of
          your assets, no centralized exchange necessary.
        </p>
        <Button>Buy Crypto</Button>
      </div>

      <div className="">
        <img src={Move} alt="" />
        <h2>Easily on-ramp or off-ramp</h2>
        <p>
          Convert cash to crypto or crypto for cash while maintaining control of
          your assets, no centralized exchange necessary.
        </p>
        <Button>Buy Crypto</Button>
      </div>

      <div className="">
        <img src={Defi} alt="" />
        <h2>Easily on-ramp or off-ramp</h2>
        <p>
          Convert cash to crypto or crypto for cash while maintaining control of
          your assets, no centralized exchange necessary.
        </p>
        <Button>Buy Crypto</Button>
      </div>
    </div>
  );
};

export default Feature;

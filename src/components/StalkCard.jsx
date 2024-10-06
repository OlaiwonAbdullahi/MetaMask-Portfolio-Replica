import CardOne from "./StalkPage/Pool/CardOne";
import CardThree from "./StalkPage/Pool/CardThree";
import CardTwo from "./StalkPage/Pool/CardTwo";

const StalkCard = () => {
  return (
    <div className="flex gap-1">
      <div className=" basis-1/4 border border-secondary p-4 m-4 mt-7 rounded-lg">
        <CardOne />
      </div>
      <div className=" basis-3/4 flex flex-col gap-4 m-4">
        <CardTwo />
        <CardThree />
      </div>
    </div>
  );
};

export default StalkCard;

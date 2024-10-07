import CardOne from "./StalkPage/Validators/CardOne";

const StalkValidator = () => {
  return (
    <div>
      <div className="flex gap-1 bg-bgColor p-3">
        <div className=" basis-1/4  bg-white p-4 m-4 mt-7 rounded-lg">
          <CardOne />
        </div>
        <div className=" basis-3/4 flex flex-col gap-4 m-4 mt-7"></div>
      </div>
    </div>
  );
};

export default StalkValidator;

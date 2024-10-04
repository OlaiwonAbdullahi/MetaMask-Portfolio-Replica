import { CgCheck } from "react-icons/cg";

const SellingList = () => {
  return (
    <div>
      <ul className=" flex flex-col gap-3">
        <li className="flex text-text text-left text-sm gap-2">
          <CgCheck className="w-6 h-6 text-black  bg-secondary rounded-full" />
          Get up-to-the-minute quotes from trusted providers!
        </li>
        <li className="flex  text-text text-left text-sm gap-2">
          <CgCheck className="w-6 h-6 text-black bg-secondary rounded-full" />
          We &apos; re here to guide you along the way.
        </li>
      </ul>
    </div>
  );
};

export default SellingList;

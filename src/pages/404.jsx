import { TiFlagOutline } from "react-icons/ti";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="h-screen mx-auto grid place-items-center text-center px-8">
      <div>
        <TiFlagOutline className="w-20 h-20 mx-auto" />
        <div
          color="blue-gray"
          className="mt-10 !text-3xl !leading-snug md:!text-4xl"
        >
          Error 404 <br /> It looks like something went wrong.
        </div>
        <div className="mt-8 mb-14 text-[18px] font-normal text-gray-500 mx-auto md:max-w-sm">
          Don&apos;t worry, our team is already on it.Please try refreshing the
          page or come back later.
        </div>
        <Link to="/">
          <div className=" flex  justify-center">
            <Button> Go Back Home </Button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Error;

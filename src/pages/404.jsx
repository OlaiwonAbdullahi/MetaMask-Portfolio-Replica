import { TiFlagOutline } from "react-icons/ti";

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
        <button color="gray" className="w-full px-4 md:w-[8rem]">
          back home
        </button>
      </div>
    </div>
  );
};

export default Error;

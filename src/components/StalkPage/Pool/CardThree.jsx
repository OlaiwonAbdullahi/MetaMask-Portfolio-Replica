import { GoCircle } from "react-icons/go";
const CardThree = () => {
  return (
    <div className="p-2 bg-white rounded-lg flex flex-col items-center justify-center mx-auto w-full h-44 text-center">
      <GoCircle className="text-4xl mb-2" />
      <span>You don&apos;t have any holdings yet.</span>
    </div>
  );
};

export default CardThree;

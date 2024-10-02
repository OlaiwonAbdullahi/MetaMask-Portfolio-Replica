import SideBar from "../components/Navigations/SideBar";
import Header from "../components/Navigations/Header";

const Overview = () => {
  return (
    <div className="bg-bgColor flex flex-row gap-4">
      <div className="basis-1/4 md:basis-1/6">
        <SideBar />
      </div>

      <div className="basis-3/4 md:basis-5/6">
        <Header />
      </div>
    </div>
  );
};

export default Overview;

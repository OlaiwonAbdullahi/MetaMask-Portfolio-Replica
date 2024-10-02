import SideBar from "../components/Navigations/SideBar";
import Header from "../components/Navigations/Header";
const Overview = () => {
  return (
    <div className="bg-bgColor flex">
      <div className=" basis-1/4">
        <SideBar />
      </div>
      <div className="basis-3/4 md:basis-">
        <Header />
      </div>
    </div>
  );
};

export default Overview;

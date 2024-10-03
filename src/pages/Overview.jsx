import SideBar from "../components/Navigations/SideBar";
import Header from "../components/Navigations/Header";
import Hero from "../components/Hero";
import Feature from "../components/Feature";
import Explore from "../components/Explore";
import MoveCrypto from "../components/Navigations/MoveCryptoSidebar";
const Overview = () => {
  return (
    <div className=" flex flex-row gap-4">
      <div className="basis-1/4 md:basis-1/6 flex">
        <SideBar />
        <MoveCrypto />
      </div>

      <div className="basis-3/4 md:basis-5/6">
        <Header />
        <Hero />
        <Feature />
        <Explore />
      </div>
    </div>
  );
};

export default Overview;

import Header from "./components/Navigations/Header";
import NavBar from "./components/Navigations/NavBar";
import SideBar from "./components/Navigations/SideBar";

export default function App() {
  return (
    <div className=" ">
      <div className=" text-4xl text-center font-pop ">
        <Header />
        <NavBar />
        <SideBar />
      </div>
    </div>
  );
}

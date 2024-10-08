import heroimg1 from "../assets/heroimg1.jpg";
import heroimg2 from "../assets/heroimg2.jpg";
import HeroContent from "./HeroContent";
const Hero = () => {
  return (
    <div className=" flex justify-between bg-bgColor pb-10 h-screen">
      <div>
        <img src={heroimg1} alt="" className=" h-4/5 w-64" />
      </div>
      <div className="">
        <HeroContent />
      </div>
      <div className="">
        <img src={heroimg2} alt="" className=" h-4/5 w-64" />
      </div>
    </div>
  );
};

export default Hero;

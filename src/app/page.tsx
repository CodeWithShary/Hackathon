import HeroSection from "./Home_page/hero-section";
import GearUp from "./Home_page/gearup-section";
import Featured from "./Home_page/featured-section";
import DontMiss from "./Home_page/dontMiss-section";




export default function Home() {
  return (
    <div>
      <HeroSection/>
      <Featured/>
      <GearUp/>
      <DontMiss/>

      </div>
  );
}

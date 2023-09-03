import Academic from "./Academic/Academic";
import HeroSection from "./HeroSection/HeroSection";
import Chamber from "./Chamber/Chamber";
import Details from "./Details/Details";
import Experience from "./Experience/Experience";
import Personalinfolink from "./Personalinfolink/Personalinfolink";
import Reviews from "./Reviews/Reviews";
import Schedule from "./Schedule/Schedule";

export default function Profile() {
  return (
    <div>
      <HeroSection />
      <Personalinfolink />
      <Details />
      <Academic />
      <Experience />
      <Schedule />
      {/* <Chamber /> */}
      <Reviews />
    </div>
  );
}

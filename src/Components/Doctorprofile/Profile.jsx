import Academic from "./Academic/Academic";
import Banner from "./Banner/Banner";
import Chamber from "./Chamber/Chamber";
import Details from "./Details/Details";
import Experience from "./Experience/Experience";
import Reviews from "./Reviews/Reviews";
import Schedule from "./Schedule/Schedule";

export default function Profile() {
  return (
    <div>
      <Banner />
      <Details />
      <Academic />
      <Experience />
      <Schedule />
      {/* <Chamber /> */}
      <Reviews />
    </div>
  );
}

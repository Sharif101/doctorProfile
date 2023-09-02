import Academic from "./Academic/Academic";
import Banner from "./Banner/Banner";
import Details from "./Details/Details";
import Experience from "./Experience/Experience";
import Schedule from "./Schedule/Schedule";

export default function Profile() {
  return (
    <div>
      <Banner />
      <Details />
      <Academic />
      <Experience />
      <Schedule />
    </div>
  );
}

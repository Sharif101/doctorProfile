import Academic from "./Academic/Academic";
import Banner from "./Banner/Banner";
import Details from "./Details/Details";
import Experience from "./Experience/Experience";

export default function Profile() {
  return (
    <div>
      <Banner></Banner>
      <Details></Details>
      <Academic></Academic>
      <Experience></Experience>
    </div>
  );
}

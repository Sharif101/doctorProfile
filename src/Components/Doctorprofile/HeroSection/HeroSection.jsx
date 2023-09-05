import classes from "./HeroSection.module.css";
import telephone from "../../../assets/HeroSection/Telephone.png";
import profile from "../../../assets/HeroSection/Profile.png";
import tick from "../../../assets/HeroSection/Tick.png";
import location from "../../../assets/HeroSection/Location.png";

export default function Banner() {
  return (
    <div>
      <div className={classes.container}>
        <img src={telephone} alt="" />
        <div className={classes.text}>
          <p>
            For booking please call at <span>01969908181</span>
          </p>
          <p>
            Consultation Fee <span>৳ 900</span>
          </p>
        </div>
      </div>
      {/* ----------------------------------------- */}
      <div className={classes.information}>
        <div className={classes.img}>
          <img src={profile} alt="" />
        </div>
        <div className={classes.infoText}>
          <div className={classes.infoTop}>
            <h3>Asst. Prof. Dr. Redwan Hossain</h3>
            <div className={classes.location}>
              <img src={location} alt="" />
              <p>Insight Psycho-Social Care</p>
            </div>
          </div>
          <p>MBBS, BCS (Health), MD (Psychiatry)</p>
          <p>Psychiatry</p>
          <div className={classes.info}>
            <div className={classes.infoFooter}>
              <img src={tick} alt="" />
              <p>
                BMDC Number: <span>58484</span>
              </p>
            </div>
            <div className={classes.infoFooter}>
              <img src={tick} alt="" />
              <p>
                Join Date: <span>December 2022</span>
              </p>
            </div>
            <div className={classes.infoFooter}>
              <img src={tick} alt="" />
              <p>
                Experience: <span>11+ Years</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

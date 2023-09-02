import classes from "./Banner.module.css";
import telephone from "../../../assets/Banner/Telephone.png";
import profile from "../../../assets/Banner/Profile.png";
import tick from "../../../assets/Banner/Tick.png";

export default function Banner() {
  return (
    <div>
      <div className={classes.container}>
        <img src={telephone} alt="" />
        <div className={classes.text}>
          <p>
            For booking please call at <span>+880132268481</span>
          </p>
          <p>
            Consultation Fee <span>৳ 900</span>
          </p>
        </div>
      </div>
      {/* ----------------------------------------- */}
      <div className={classes.information}>
        {/* <div className={classes.img}></div> */}
        <img src={profile} alt="" />
        <div className={classes.infoText}>
          <h3>Asst. Prof. Dr. Redwan Hossain</h3>
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
      {/* ---------------------------------------------------- */}
      <div className={classes.personalInfo}>
        <a href="#">DETAILS</a>
        <a href="#">ACADEMIC INFO</a>
        <a href="#">EXPERIENCE</a>
        <a href="#">SCHEDULE</a>
        <a href="#">CHAMBER</a>
        <a href="#">REVIEWS</a>
      </div>
    </div>
  );
}

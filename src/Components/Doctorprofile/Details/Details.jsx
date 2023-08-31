import classes from "./Details.module.css";
import video from "../../../assets/Details/video.png";
import green from "../../../assets/Details/GreenRectangle.png";
import doctor from "../../../assets/Details/Doctors.png";

export default function Details() {
  return (
    <div className={classes.container}>
      <div className={classes.text}>
        <h4>Details</h4>
        {/* <div className={classes.img}>
          <img src={green} alt="" />
        </div> */}
        <p>Work Station</p>
        <div className={classes.workStation}>
          <h5>Shaheed Suhrawardy Medical College Hospital</h5>
          <p>Asst. Professor, 2023 - Working</p>
        </div>
        <div className={classes.feesConsultation}>
          <div className={classes.fees}>
            <p>Fees</p>
            <div className={classes.workStation}>
              <p>Online Fee: 900৳</p>
              <p>Chamber Fee: 1,200৳</p>
            </div>
          </div>
          <div className={classes.consultation}>
            <p>Consultation Time</p>
            <div className={classes.workStation}>
              <p>08:00 PM - 10:40 PM</p>
            </div>
          </div>
        </div>
        {/* ------unlimited doctor------ */}
        <div className={classes.unlimited}>
          <div className={classes.time}>
            <h5>UNLIMITED DOCTORS!</h5>
            <span>24/7 Available</span>
          </div>
          <img src={doctor} alt="" />
        </div>
      </div>
      {/* <div className={classes.img}></div> */}

      <img src={video} alt="" />
    </div>
  );
}

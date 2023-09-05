import classes from "./Details.module.css";
import video from "../../../assets/Details/video.png";
import doctor from "../../../assets/Details/Doctors.png";

export default function Details() {
  return (
    <div className={classes.container}>
      <div className={classes.text}>
        <div className={classes.title}>
          <div>
            <h4>Details</h4>
            <div className={classes.divbottom}></div>
          </div>
        </div>
        <p>Work Station</p>
        <div className={classes.workStation}>
          <div className={classes.divBorder}></div>
          <div className={classes.info}>
            <h5>Shaheed Suhrawardy Medical College Hospital</h5>
            <p>Asst. Professor, 2023 - Working</p>
          </div>
        </div>
        <div className={classes.feesConsultation}>
          <div className={classes.fees}>
            <p>Fees</p>
            <div className={classes.workStation}>
              <div className={classes.divBorder}></div>
              <div className={classes.info}>
                <p>Online Fee: 900৳</p>
                <p>Chamber Fee: 1,200৳</p>
                <p>Follow-Up Fee: 600৳</p>
              </div>
            </div>
          </div>
          <div className={classes.times}>
            <p>Consultation Time</p>
            <div className={classes.workStation}>
              <div className={classes.divBorder}></div>
              <div className={classes.info}>
                <p>08:00 PM - 10:40 PM</p>
              </div>
            </div>
          </div>
        </div>
        {/* ------unlimited doctor------  */}
        <div className={classes.unlimited}>
          <div className={classes.time}>
            <h5>UNLIMITED DOCTORS!</h5>
            <span>24/7 Available</span>
          </div>
          <img src={doctor} alt="" />
        </div>
      </div>
      {/* <div className={classes.img}></div> */}

      <div className={classes.img}>
        <img src={video} alt="" />
      </div>
    </div>
  );
}

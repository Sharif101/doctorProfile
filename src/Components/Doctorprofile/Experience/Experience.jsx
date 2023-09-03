import classes from "./Experience.module.css";

export default function Experience() {
  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <h4>Experience</h4>
        <div className={classes.divclr}></div>
      </div>
      {/* ---------------- */}
      <div className={classes.info}>
        <div className={classes.singleInfo}>
          <h5>Shaheed Suhrawardy Medical College Hospital</h5>
          <p>Asst. Professor</p>
          <p>2023 - Working</p>
        </div>
        <div className={classes.singleInfo}>
          <h5>Shaheed Suhrawardy Medical College Hospital</h5>
          <p>Psychiatrist</p>
          <p>2021 - 2023</p>
        </div>
      </div>
      {/* ----------- */}
      <div className={classes.info}>
        <div className={classes.singleInfo}>
          <h5>Bangabandhu Sheikh Mujib Medical University</h5>
          <p>Resident</p>
          <p>2016 - 2021</p>
        </div>
        <div className={classes.singleInfo}>
          <h5>Upazilla Health Complex, Madhabpur, Hobiganj</h5>
          <p>Medical Officer</p>
          <p>2013 - 2016</p>
        </div>
      </div>
    </div>
  );
}

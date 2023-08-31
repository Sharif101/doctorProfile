import classes from "./Academic.module.css";

export default function Academic() {
  return (
    <div className={classes.container}>
      <h3>Academic Info</h3>
      <div className={classes.info}>
        <div className={classes.singleInfo}>
          <h5>MD</h5>
          <p>Bangabandhu Sheikh Mujib Medical University</p>
          <p>Psychiatrist (2020 - 2022)</p>
        </div>
        <div className={classes.singleInfo}>
          <h5>MBBS</h5>
          <p>Mymnensingh Medical College Hospital</p>
          <p>General practitioner (2015 - 2020)</p>
        </div>
      </div>
    </div>
  );
}

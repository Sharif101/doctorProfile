import classes from "./Academic.module.css";

export default function Academic() {
  return (
    <div className={classes.container} id="academic">
      <div className={classes.title}>
        <div>
          <h4>Academic</h4>
          <div className={classes.divbottom}></div>
        </div>
      </div>
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

import classes from "./Schedule.module.css";

export default function Schedule() {
  return (
    <div className={classes.container} id="schedule">
      <div className={classes.schedule}>
        <div>
          <h4>Schedule</h4>
          <div className={classes.divbottom}></div>
        </div>
      </div>
      <div className={classes.title}>
        <p>9th September 2023</p>
        <input type="date" />
      </div>
      <div className={classes.info}>
        <div className={classes.singleInfo}>
          <div className={classes.title2}>
            <p>Online</p>
          </div>
          <div className={classes.allTime}>
            <div className={classes.time}>
              <p>08:00 pm</p>
            </div>
            <div className={classes.time}>
              <p>08:00 pm</p>
            </div>
            <div className={classes.time}>
              <p>08:00 pm</p>
            </div>
            <div className={classes.time}>
              <p>08:00 pm</p>
            </div>
            <div className={classes.time}>
              <p>08:00 pm</p>
            </div>
            <div className={classes.time}>
              <p>08:00 pm</p>
            </div>
            <div className={classes.time}>
              <p>08:00 pm</p>
            </div>
          </div>
        </div>
        <div className={classes.singleInfo}>
          <div className={classes.title2}>
            <p>Offline</p>
          </div>
          <div className={classes.allTime}>
            <div className={classes.time}>
              <p>08:00 pm</p>
            </div>
            <div className={classes.time}>
              <p>08:00 pm</p>
            </div>
            <div className={classes.time}>
              <p>08:00 pm</p>
            </div>
            <div className={classes.time}>
              <p>08:00 pm</p>
            </div>
            <div className={classes.time}>
              <p>08:00 pm</p>
            </div>
            <div className={classes.time}>
              <p>08:00 pm</p>
            </div>
            <div className={classes.time}>
              <p>08:00 pm</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

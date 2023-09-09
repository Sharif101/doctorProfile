import { useState } from "react";
import classes from "./Infotab.module.css";

export default function Personalinfolink() {
  let [active, setActive] = useState("#details");
  // console.log(active);

  return (
    <div className={classes.personalInfo}>
      <a
        href="#details"
        className={active === "#details" ? classes.linkclr : classes.default}
        onClick={() => setActive("#details")}
      >
        DETAILS
      </a>
      <a
        href="#academic"
        className={active === "#academic" ? classes.linkclr : classes.default}
        onClick={() => setActive("#academic")}
      >
        ACADEMIC INFO
      </a>
      <a
        href="#experience"
        className={active === "#experience" ? classes.linkclr : classes.default}
        onClick={() => setActive("#experience")}
      >
        EXPERIENCE
      </a>
      <a
        href="#schedule"
        className={active === "#schedule" ? classes.linkclr : classes.default}
        onClick={() => setActive("#schedule")}
      >
        SCHEDULE
      </a>
      <a
        href="#chamber"
        className={active === "#chamber" ? classes.linkclr : classes.default}
        onClick={() => setActive("#chamber")}
      >
        CHAMBER
      </a>
      <a
        href="#reviews"
        className={active === "#reviews" ? classes.linkclr : classes.default}
        onClick={() => setActive("#reviews")}
      >
        REVIEWS
      </a>
    </div>
  );
}

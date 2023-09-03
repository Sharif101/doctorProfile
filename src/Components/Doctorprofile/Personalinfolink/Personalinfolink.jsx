import classes from "./Personalinfolink.module.css";

export default function Personalinfolink() {
  return (
    <div className={classes.personalInfo}>
      <a href="#" className={classes.linkclr}>
        DETAILS
      </a>
      <a href="#">ACADEMIC INFO</a>
      <a href="#">EXPERIENCE</a>
      <a href="#">SCHEDULE</a>
      <a href="#">CHAMBER</a>
      <a href="#">REVIEWS</a>
    </div>
  );
}

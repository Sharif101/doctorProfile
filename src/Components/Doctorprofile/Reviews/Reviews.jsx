import classes from "./Reviews.module.css";
import star from "../../../assets/Reviews/star.png";
import star2 from "../../../assets/Reviews/star2.png";
import profile from "../../../assets/Reviews/profile.png";
import ad from "../../../assets/Reviews/Ad.png";

export default function Reviews() {
  return (
    <div className={classes.container} id="reviews">
      <div className={classes.text}>
        <div className={classes.title}>
          <div>
            <h4>Reviews</h4>
            <div className={classes.divbottom}></div>
          </div>
        </div>
        <div className={classes.review}>
          <div className={classes.reviewStar}>
            <div className={classes.star}>
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star2} alt="" />
            </div>
            <p>
              4.0 <span>Total 10 reviews</span>
            </p>
          </div>
          <select name="" id="">
            <option value="" disabled selected>
              Sort by Highest
            </option>
          </select>
        </div>
        {/* -------comments-------- */}
        <div className={classes.singleComment}>
          <div className={classes.nameStar}>
            <div className={classes.name}>
              <img src={profile} alt="" />
              <p>Mr. Wahid</p>
            </div>
            <div className={classes.commentStar}>
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </div>
          </div>
          <p>
            Lorem ipsum is a placeholder text commonly used to find the visual
            form of a document.
          </p>
          <small>2 days ago</small>
        </div>

        {/* -------comments-------- */}
        <div className={classes.singleComment}>
          <div className={classes.nameStar}>
            <div className={classes.name}>
              <img src={profile} alt="" />
              <p>Mr. Wahid</p>
            </div>
            <div className={classes.commentStar}>
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </div>
          </div>
          <p>
            Lorem ipsum is a placeholder text commonly used to find the visual
            form of a document.
          </p>
          <small>2 days ago</small>
        </div>
        <div className={classes.btn}>
          <button>View More</button>
        </div>
      </div>
      <div className={classes.img}>
        <img src={ad} alt="" />
      </div>
    </div>
  );
}

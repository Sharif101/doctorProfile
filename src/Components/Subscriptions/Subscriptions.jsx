import classes from "./Subscriptions.module.css";
import tick from "../../assets/Subscriptions/Tick.png";

export default function Subscriptions() {
  return (
    <div className={classes.container}>
      <p>Subscriptions Plans</p>
      <div className={classes.Subscriptions}>
        {/* ....................FREE TIER............................ */}
        <div className={classes.singleSub}>
          <div className={classes.text}>
            <div className={classes.title}>
              <h5>FREE TIER</h5>
              <p>Free Forever</p>
            </div>
            <div className={classes.offer}>
              <div className={classes.singleOffer}>
                <p>
                  <span>৳00</span>
                  <sub>/for 1 month</sub>
                </p>
              </div>
            </div>
            <div className={classes.description}>
              <div className={classes.info}>
                <div>
                  <img src={tick} alt="" />
                </div>
                <p>Clinic Registration</p>
              </div>
              <div className={classes.info}>
                <div>
                  <img src={tick} alt="" />
                </div>
                <p>Clinic Profile</p>
              </div>
              <div className={classes.info}>
                <div>
                  <img src={tick} alt="" />
                </div>
                <p>Clinic Details On Clinic Portal</p>
              </div>
            </div>
          </div>
          <div className={classes.button}>
            <button>Subscribe Now</button>
          </div>
        </div>
        {/* ...................ACE TIER................................... */}
        <div className={`${classes.singleSub} ${classes.singleSub4}`}>
          <div className={classes.text}>
            <div className={classes.title}>
              <h5>ACE TIER</h5>
              <p>For Details Contact Us</p>
            </div>

            <div className={classes.description}>
              <div className={classes.info}>
                <div>
                  <img src={tick} alt="" />
                </div>
                <p>Everything In Premium+</p>
              </div>
              <div className={classes.info}>
                <div>
                  <img src={tick} alt="" />
                </div>
                <p>Patient Medical Data Analytics</p>
              </div>
              <div className={classes.info}>
                <div>
                  <img src={tick} alt="" />
                </div>
                <p>Clinic Promotion Through Ads</p>
              </div>
              <div className={classes.info}>
                <div>
                  <img src={tick} alt="" />
                </div>
                <p>Custom Solution As Per Requirements</p>
              </div>
            </div>
          </div>
          <div className={classes.button}>
            <button>Subscribe Now</button>
          </div>
        </div>
        {/* .....................PREMIUM PREPAID TIER................................. */}
        <div className={classes.singleSub}>
          <div className={classes.text}>
            <div className={classes.title}>
              <h5>PREMIUM PREPAID TIER</h5>
              <p>Free Trial for 1 Month</p>
            </div>
            <div className={classes.offer}>
              <div className={classes.singleOffer}>
                <p>
                  <span>৳2499</span>
                  <sub>/for 1 month</sub>
                </p>
              </div>
              <div className={classes.singleOffer}>
                <p>
                  <span>৳19999</span>
                  <sub>/for 1 year</sub>
                </p>
              </div>
            </div>
            <div className={classes.description}>
              <div className={classes.info}>
                <div>
                  <img src={tick} alt="" />
                </div>
                <p>Everything In Free+</p>
              </div>
              <div className={classes.info}>
                <div>
                  <img src={tick} alt="" />
                </div>
                <p>Smart Appointment Management</p>
              </div>
              <div className={classes.info}>
                <div>
                  <img src={tick} alt="" />
                </div>
                <p>Doctor List</p>
              </div>
              <div className={classes.info}>
                <div>
                  <img src={tick} alt="" />
                </div>
                <p>E-Prescription</p>
              </div>
              <div className={classes.info}>
                <div>
                  <img src={tick} alt="" />
                </div>
                <p>Patient Health Record (EHR/EMR)</p>
              </div>
              <div className={classes.info}>
                <div>
                  <img src={tick} alt="" />
                </div>
                <p>Dashboard</p>
              </div>
            </div>
          </div>
          <div className={classes.button}>
            <button>Subscribe Now</button>
          </div>
        </div>

        {/* ......................PREMIUM POSTPAID TIER................................ */}
        <div className={classes.singleSub}>
          <div className={classes.text}>
            <div className={classes.title}>
              <h5>PREMIUM POSTPAID TIER</h5>
              <p>Premium Tier</p>
            </div>

            <div className={classes.charge}>
              <div className={classes.singleCharge}>
                <h4>Charge :</h4>
                <p>
                  <span>৳299</span> /month Per Patient
                </p>
              </div>
              <div className={classes.singleCharge}>
                <h4>Charge :</h4>
                <p>
                  <span>৳2</span> - 1000 patients - <span>৳1</span> /month Per
                  Prescription
                </p>
              </div>
              <div className={classes.singleCharge}>
                <h4>Charge :</h4>
                <p>
                  <span>৳2</span> - 1000 patients - <span>৳1</span> /month
                </p>
              </div>
            </div>
            <div className={classes.description}>
              <div className={classes.info}>
                <div>
                  <img src={tick} alt="" />
                </div>
                <p>Everything In Free+</p>
              </div>
              <div className={classes.info}>
                <div>
                  <img src={tick} alt="" />
                </div>
                <p>Smart Appointment Management</p>
              </div>
              <div className={classes.info}>
                <div>
                  <img src={tick} alt="" />
                </div>
                <p>Doctor List</p>
              </div>
              <div className={classes.info}>
                <div>
                  <img src={tick} alt="" />
                </div>
                <p>E-Prescription</p>
              </div>
              <div className={classes.info}>
                <div>
                  <img src={tick} alt="" />
                </div>
                <p>Patient Health Record (EHR/EMR)</p>
              </div>
              <div className={classes.info}>
                <div>
                  <img src={tick} alt="" />
                </div>
                <p>Dashboard</p>
              </div>
            </div>
          </div>
          <div className={classes.button}>
            <button>Subscribe Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

import classes from "./Chamber.module.css";

export default function Chamber() {
  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <div>
          <h4>Chamber Info</h4>
          <div className={classes.divbottom}></div>
        </div>
      </div>
      <table>
        <tr>
          <th>Sl.</th>
          <th>Chamber Name</th>
          <th>District</th>
          <th>Detailed Address</th>
          <th>Consultation Fee</th>
          <th>Status</th>
        </tr>
        <tr>
          <td>01</td>
          <td>Khidmah Hospital</td>
          <td>Dhaka</td>
          <td>
            Address: C-287/2-3, Khilgaon Bishwa Road, Khilgaon Call for serial:
            096-06063030, 01711063030
          </td>
          <td>৳0</td>
          <td>
            <p className={classes.btnOff}>Close</p>
          </td>
        </tr>
        <tr>
          <td>02</td>
          <td>Insight Psycho-Social Care</td>
          <td>Dhaka</td>
          <td>
            Address: 71/1, pioneer road, Shegun Bagicha, opposite to NBR Call
            for serial: 02-48321962, 01834623022
          </td>
          <td>৳500</td>
          <td>
            <p className={classes.btnOn}>Open</p>
          </td>
        </tr>
      </table>
    </div>
  );
}

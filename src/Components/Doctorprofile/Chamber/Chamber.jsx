import classes from "./Chamber.module.css";

export default function Chamber() {
  return (
    <div className={classes.container}>
      <table>
        <tr className={classes.tableTh}>
          <th className={classes.tr1}>Sl.</th>
          <th className={classes.tr2}>Chamber Name</th>
          <th className={classes.tr3}>District</th>
          <th className={classes.tr4}>Detailed Address</th>
          <th className={classes.tr5}>Consultation Fee</th>
          <th className={classes.tr6}>Status</th>
        </tr>
        <tr className={classes.tableTr1}>
          <td className={classes.tr1}>01</td>
          <td className={classes.tr2}>Khidmah Hospital</td>
          <td className={classes.tr3}>Dhaka</td>
          <td className={classes.tr4}>
            Address: C-287/2-3, Khilgaon Bishwa Road, Khilgaon Call for serial:
            096-06063030, 01711063030
          </td>
          <td className={classes.tr5}>৳0</td>
          <td className={classes.tr6}>OFF</td>
        </tr>
      </table>
    </div>
  );
}

import PropTypes from "prop-types";
import s from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={s.table}>
      <thead className={s.tableHeader}>
        <tr className={s.tableRow}>
          <th className={s.tableTh}>Type</th>
          <th className={s.tableTh}>Amount</th>
          <th className={s.tableTh}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => {
          return (
            <tr key={item.id} className={s.tableRow}>
              <td className={s.tableTd}>{item.type}</td>
              <td className={s.tableTd}>{item.amount}</td>
              <td className={s.tableTd}>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};

export default TransactionHistory;

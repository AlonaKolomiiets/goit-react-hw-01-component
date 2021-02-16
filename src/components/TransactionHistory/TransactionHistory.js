import React from "react";
import PropTypes from "prop-types";
import TransactionHistoryItem from "../TransactionHistoryItem/TransactionHistoryItem";
import styles from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.transactionHistory}>
      <thead>
        <tr className={styles.transactionDescription}>
          <th className={styles.transactionDescriptionItem}>Type</th>
          <th className={styles.transactionDescriptionItem}>Amount</th>
          <th className={styles.transactionDescriptionItem}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((el) => (
          <TransactionHistoryItem
            key={el.id}
            type={el.type}
            amount={el.amount}
            currency={el.currency}
          />
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TransactionHistory;

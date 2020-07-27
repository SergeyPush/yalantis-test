import React from "react";
import styles from "./Calendar.module.css";

const Calendar = ({ userList }) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const itemColor = (number) => {
    if (number <= 2) {
      return "gray";
    } else if (number >= 3 && number <= 6) {
      return "blue";
    } else if (number >= 7 && number <= 10) {
      return "green";
    } else {
      return "red";
    }
  };

  return (
    <div className={styles.calendar}>
      {months.map((item, id) => {
        const color = itemColor(userList[id].length);

        return (
          <div className={styles.calendar_item} key={id}>
            <div className={`${styles.label} ${styles[color]}`}> {item}</div>
            <div className={styles.body}>{userList[id].length}</div>
            <ul className={styles.user_list}>
              {userList[id].map((item, itemId) => (
                <li className={styles.list_item} key={itemId}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Calendar;

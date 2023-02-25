import React, { useState } from "react";
import Image from "next/image";
import styles from "@/styles/Users.module.css";

export const Users = ({ users }) => {
  const [displayedUsers, setDisplayedUsers] = useState(users);
  const [dateSelected, setDate] = useState();

  //function for filtering the users
  const filterUsers = (filter) => {
    if (filter === "20") {
      let filteredUsers = users.filter((user) => user.age <= 20);
      setDisplayedUsers(filteredUsers);
    } else if (filter === "21") {
      let filteredUsers = users.filter(
        (user) => user.age >= 21 && user.age <= 39
      );
      setDisplayedUsers(filteredUsers);
    } else if (filter === "40") {
      let filteredUsers = users.filter((user) => user.age >= 40);
      setDisplayedUsers(filteredUsers);
    } else {
      setDisplayedUsers(users);
    }
  };

  const countMe = () => {
    for (let index = 1; index <= 100; index++) {
      if (index % 3 === 0) {
        console.log("Foo");
      } else if (index % 5 === 0) {
        console.log("Bar");
      } else console.log(index);
    }
  };

  //function to convert selected date
  const convertDate = () => {
    countMe();
    if (dateSelected) {
      let date_string = dateSelected;
      alert(date_string);
    } else alert("Select a valid date");
  };

  return (
    <div className={styles.contentBody}>
      {/* Filter for users display */}
      <label className={styles.filterLabel}>Filter by Age</label>
      <select
        name="filter"
        id="age"
        onChange={(e) => filterUsers(e.target.value)}
        className={styles.selectMenu}
      >
        <option value="All">All</option>
        <option value="20">20 and below</option>
        <option value="21">21 to 39</option>
        <option value="40">40 and above</option>
      </select>

      <div className={styles.divider}></div>

      {/* Display users section */}
      <div className={styles.usersContainer}>
        {displayedUsers &&
          displayedUsers.map((user) => (
            <div className={styles.card} key={user.id}>
              <Image src="/userphoto.png" width="65" height="65" alt="user" />
              <div className={styles.userInfoContainer}>
                <div className={styles.userName}>{user.name}</div>
                <label className={styles.label}>
                  Email:{" "}
                  <span className={styles.userDetails}>{user.email}</span>
                </label>
                <label className={styles.label}>
                  Mobile:{" "}
                  <span className={styles.userDetails}>{user.phone}</span>
                </label>
                <label className={styles.label}>
                  Company:{" "}
                  <span className={styles.userDetails}>{user.company}</span>
                </label>
                <label className={styles.label}>
                  Address:{" "}
                  <span className={styles.userDetails}>
                    {user.address.street}
                  </span>
                </label>
                <label className={styles.label}>
                  Website:{" "}
                  <span className={styles.userDetails}>{user.website}</span>
                </label>
                <label className={styles.label}>
                  Age: <span className={styles.userDetails}>{user.age} </span>
                </label>
              </div>
            </div>
          ))}
      </div>

      <div className={styles.divider}></div>

      {/* Date convert section */}
      <label className={styles.filterLabel}>Date</label>
      <div className={styles.dateContainer}>
        <input
          type="date"
          id="start"
          name="trip-start"
          min="2023-02-25"
          max="2023-12-31"
          className={styles.selectMenu}
          onChange={(e) => setDate(e.target.value)}
        ></input>
        <div className={styles.convertButton} onClick={convertDate}>
          CONVERT
        </div>
      </div>
    </div>
  );
};

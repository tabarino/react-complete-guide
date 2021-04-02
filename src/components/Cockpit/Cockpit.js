import React, { useEffect } from 'react';
import styles from "./Cockpit.module.css";

const Cockpit = (props) => {
  // It is like componentDidMount and componentDidUpdate and just this Effect
  useEffect(() => {
    console.log('Cockpit useEffect');
    // You can send a HTTP Request from here
  });

  const assignedClasses = [];
  let buttonClass = '';

  if (props.persons.length <= 2) {
    assignedClasses.push(styles.red);
  }

  if (props.persons.length <= 1) {
    assignedClasses.push(styles.bold);
  }

  if (props.showPersons) {
    buttonClass = styles.Red;
  }

  return (
    <div className={styles.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button className={buttonClass} onClick={props.clicked}>
        Toogle Persons
      </button>
    </div>
  );
}

export default Cockpit;

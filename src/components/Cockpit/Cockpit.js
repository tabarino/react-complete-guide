import React, { useEffect } from 'react';
import styles from "./Cockpit.module.css";

const Cockpit = (props) => {
  // It combines componentDidMount and componentDidUpdate
  // It is like componentDidMount and componentDidUpdate in just this Effect
  useEffect(() => {
    console.log('Cockpit useEffect');
    // You can send a HTTP Request from here

    setTimeout(() => {
      alert('Saved Data to Cloud.')
    }, 1000);
  // If you add this option the useEffect will be called only when the person changes
  }, [props.persons]);
  // If you pass an empty array here, it will be called only the first time
  // }, []);

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

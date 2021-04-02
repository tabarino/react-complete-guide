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

    // It runs BEFORE the main useEffect function runs,
    // but AFTER the (first) render cycle
    // It will be called when the Component gets destroyed
    return () => {
      console.log('Cockpit cleanup work in useEffect');
    };

  // If you add this option the useEffect will be called only when the person changes
  }, [props.persons]);
  // If you pass an empty array here, it will be called only the first time
  // }, []);

  // In this 2nd useEffect, we do not pass a [] in the second option of the useEffect
  useEffect(() => {
    console.log('Cockpit 2nd useEffect');

    // So, this cleanup will run in every update cycle
    return () => {
      console.log('Cockpit cleanup work in 2nd useEffect');
    };
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

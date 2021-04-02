import React, { useEffect, useRef, useContext } from 'react';
import styles from "./Cockpit.module.css";
import AuthContext from '../../context/auth-context';

const Cockpit = (props) => {
  const toggleButtonRef = useRef();
  const authContext = useContext(AuthContext);

  // It combines componentDidMount and componentDidUpdate
  // It is like componentDidMount and componentDidUpdate in just this Effect
  useEffect(() => {
    console.log('Cockpit useEffect');
    // You can send a HTTP Request from here

    const timer = setTimeout(() => {
      alert('Saved Data to Cloud.')
    }, 1000);

    // Click button automatically
    toggleButtonRef.current.click();

    // It runs BEFORE the main useEffect function runs,
    // but AFTER the (first) render cycle
    // It will be called when the Component gets destroyed
    return () => {
      clearTimeout(timer);
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

  if (props.personsLength <= 2) {
    assignedClasses.push(styles.red);
  }

  if (props.personsLength <= 1) {
    assignedClasses.push(styles.bold);
  }

  if (props.showPersons) {
    buttonClass = styles.Red;
  }

  return (
    <div className={styles.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button className={buttonClass} onClick={props.clicked} ref={toggleButtonRef}>
        Toogle Persons
      </button>
      <button onClick={authContext.login}>Log in</button>
      {/* <AuthContext.Consumer>
        {(context) => <button onClick={context.login}>Log in</button>}
      </AuthContext.Consumer> */}
    </div>
  );
}

export default React.memo(Cockpit);

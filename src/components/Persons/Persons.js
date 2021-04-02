import React from 'react';
import Person from '../Person/Person';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

const Persons = (props) => {
  console.log('Persons render');
  
  return props.persons.map((person, index) => {
    return (
      <ErrorBoundary key={person.id}>
        <Person
          click={props.clicked.bind(this, index)}
          changed={(event) => props.changed(event, person.id)}
          name={person.name}
          age={person.age}>
        </Person>
      </ErrorBoundary>
    );
  });
}

export default Persons;

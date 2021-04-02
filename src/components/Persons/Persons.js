import React, { Component } from 'react';
import Person from '../Person/Person';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

class Persons extends Component {
  // static getDerivedStateFromProps(props, state) {
  //   console.log('Persons getDerivedStateFromProps');
  //   return state;
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('Persons shouldComponentUpdate');
    return true;
  }

  render() {
    console.log('Persons render');

    return this.props.persons.map((person, index) => {
      return (
        <ErrorBoundary key={person.id}>
          <Person
            click={this.props.clicked.bind(this, index)}
            changed={(event) => this.props.changed(event, person.id)}
            name={person.name}
            age={person.age}>
          </Person>
        </ErrorBoundary>
      );
    });
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('Persons getSnapshotBeforeUpdate');
    return { message: 'Snapshot' };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('Persons componentDidUpdate', snapshot);
  }

  componentWillUnmount() {
    console.log('Persons componentWillUnmount');
  }
}

export default Persons;

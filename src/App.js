import React, { Component } from 'react';
// import React, { useState } from 'react';
import Radium from 'radium';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: '0', name: 'Ivan', age: 39 },
      { id: '1', name: 'Rosana', age: 37 },
      { id: '2', name: 'Matheus', age: 19 }
    ],
    otherProperty: 'Some Other Value',
    showPersons: false
  };

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={this.deletePersonHandler.bind(this, index)}
                changed={(event) => this.nameChangedHandler(event, person.id)}
                key={person.id}
                name={person.name}
                age={person.age}>
              </Person>
            );
          })}
        </div>
      );

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'lightcoral',
        color: 'black'
      };
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App.</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button
          style={style}
          onClick={this.tooglePersonsHandler}>Toogle Persons</button>
        {persons}
        {/* onClick={() => this.switchNameHandler('Ivan Tabarino')}>Switch Name</button> */}
        {/* {this.state.showPersons ?
          <div >
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}>My Hobby is Develop.
          </Person>
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, 'Taba')}>My Hobby is Travel.
          </Person>
            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age}
              changed={this.nameChangedHandler}>My Hobby is Sleep.
          </Person>
          </div> : null
        } */}
      </div>
    );

    // This is the same as the above
    // This is cumbersome and the reason we use the JSX above
    // The JSX above is compiled in this commented code
    // return React.createElement(
    //   'div', { className: 'App' },
    //   React.createElement('h1', null, 'Hi, I\'m a React App.')
    // );
  }

  tooglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  }

  switchNameHandler = (newName) => {
    // Do not mutate state directly. Use setState()
    // this.state.persons[0].name = 'Ivan Tabarino';
    this.setState({
      persons: [
        { name: newName, age: 39 },
        { name: 'Rosana', age: 38 },
        { name: 'Matheus', age: 19 }
      ]
    });
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const person = { ...this.state.persons[personIndex] };

    // Just another way to not mutate the object
    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  deletePersonHandler = (personIndex) => {
    // You must always update states in an immutable fashion
    // The slice() copies the array instead of just pointing it to the same
    // However, it's better to use the spread operator (...) to do that
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    });
  }
}

// const App = props => {
//   const [state, setState] = useState({
//     persons: [
//       { name: 'Ivan', age: 39 },
//       { name: 'Rosana', age: 37 },
//       { name: 'Matheus', age: 19 }
//     ],
//     otherProperty: 'Some Other Value'
//   });

//   // You can also set useState many times and you won't have to set all the properties again.
//   // const [otherState, setOtherState] = useState({
//   //   otherProperty: 'Some Other Value'
//   // });

//   // When using function components, you need to set again all the properties
//   // Otherwise you will lose them
//   const switchNameHandler = () => {
//     setState({
//       persons: [
//         { name: 'Ivan Tabarino', age: 39 },
//         { name: 'Rosana', age: 38 },
//         { name: 'Matheus', age: 19 }
//       ],
//       otherProperty: state.otherProperty
//     });
//   };

//   return (
//     <div className="App">
//       <h1>Hi, I'm a React App.</h1>
//       <p>This is really working!</p>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       <Person name={state.persons[0].name} age={state.persons[0].age}>My Hobby is Develop.</Person>
//       <Person name={state.persons[1].name} age={state.persons[1].age}>My Hobby is Travel.</Person>
//       <Person name={state.persons[2].name} age={state.persons[2].age}>My Hobby is Sleep.</Person>
//     </div>
//   );
// }

export default Radium(App);

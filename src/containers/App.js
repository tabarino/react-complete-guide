import React, { Component } from 'react';
import styles from "./App.module.css";
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      { id: '0', name: 'Ivan', age: 39 },
      { id: '1', name: 'Rosana', age: 37 },
      { id: '2', name: 'Matheus', age: 19 }
    ],
    otherProperty: 'Some Other Value',
    showPersons: false,
    showCockpit: true
  };

  constructor(props) {
    super(props);
    console.log('App Constructor')
    // You can set the state here, but in modern versions of react
    // It is supported and more used do in the way was before.
    // this.state = {
    //   persons: [
    //     { id: '0', name: 'Ivan', age: 39 },
    //     { id: '1', name: 'Rosana', age: 37 },
    //     { id: '2', name: 'Matheus', age: 19 }
    //   ],
    //   otherProperty: 'Some Other Value',
    //   showPersons: false
    // };
  }

  static getDerivedStateFromProps(props, state) {
    console.log('App getDerivedStateFromProps', props);
    return state;
  }

  render() {
    console.log('App render');

    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler}>
      </Persons>;
    }

    return (
      <div className={styles.App}>
        <button onClick={() => { this.setState({ showCockpit: false }); }}>Remove Cockpit</button>
        {this.state.showCockpit ? <Cockpit
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.tooglePersonsHandler}>
        </Cockpit> : null}
        {persons}
      </div>
    );
  }

  componentDidMount() {
    console.log('App componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('App shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('App componentDidUpdate');
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

//  // This is the same as the above
//  // This is cumbersome and the reason we use the JSX above
//  // The JSX above is compiled in this commented code
//     return React.createElement(
//       'div', { className: 'App' },
//       React.createElement('h1', null, 'Hi, I\'m a React App.')
//     );
// }

// export default Radium(App);
export default App;

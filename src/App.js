import React, { Component } from 'react';
// import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Ivan', age: 39 },
      { name: 'Rosana', age: 37 },
      { name: 'Matheus', age: 19 }
    ],
    otherProperty: 'Some Other Value'
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App.</h1>
        <p>This is really working!</p>
        <button onClick={() => this.switchNameHandler('Ivan Tabarino')}>Switch Name</button>
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
          age={this.state.persons[2].age}>My Hobby is Sleep.
        </Person>
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

export default App;

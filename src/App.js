import React, { Component } from 'react';
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
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App.</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My Hobby is Develop.</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobby is Travel.</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>My Hobby is Sleep.</Person>
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

  switchNameHandler = () => {
    // Do not mutate state directly. Use setState()
    // this.state.persons[0].name = 'Ivan Tabarino';
    this.setState({
      persons: [
        { name: 'Ivan Tabarino', age: 39 },
        { name: 'Rosana', age: 38 },
        { name: 'Matheus', age: 19 }
      ]
    });
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App.</h1>
        <p>This is really working!</p>
        <Person name="Ivan" age="39">My Hobby is Develop.</Person>
        <Person name="Rosana" age="37">My Hobby is Travel.</Person>
        <Person name="Matheus" age="19">My Hobby is Sleep.</Person>
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
}

export default App;

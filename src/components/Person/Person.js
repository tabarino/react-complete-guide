import React, { Component, Fragment } from 'react';
import Aux from '../../hoc/Aux';
import styles from "./Person.module.css";

class Person extends Component {
  // const Person = (props) => {
  // const rnd = Math.random();
  // if (rnd > 0.7) {
  //   throw new Error('Something went wrong!!!');
  // }

  render() {
    console.log('Person render');

    // You can use Adjacent JSX Element returning an array
    // return [
    //   <p key="item1" onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} years old.</p>,
    //   <p key="item2">{this.props.children}</p>,
    //   <input key="item3" type="text" onChange={this.props.changed} value={this.props.name}></input>
    // ];

    // Or in a better way, just create an Aux component and wrap everything inside it
    // return (
    //   <Aux>
    //     <p onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} years old.</p>
    //     <p>{this.props.children}</p>
    //     <input type="text" onChange={this.props.changed} value={this.props.name}></input>
    //   </Aux>
    // );

    // From React 16 you can use like this
    return (
      <Fragment>
        <p onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} years old.</p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name}></input>
      </Fragment>
    );
  }

  // return (
  //   <div className={styles.Person}>
  //     <p onClick={props.click}>I'm {props.name} and I'm {props.age} years old.</p>
  //     <p>{props.children}</p>
  //     <input type="text" onChange={props.changed} value={props.name}></input>
  //   </div>
  // );
}

export default Person;

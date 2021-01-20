import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component{

  state = {
    persons : [
      {name: 'Girish',age: 28},
      {name: 'Dexter',age: 27},
      {name: 'John',age: 24}
    ],
    otherState : 'Some other value'
  }

  switchNameHandler = () => {
    this.setState(
      {
        persons : [
          {name:'Giri',age:12},
          {name:'Dex',age:13},
          {name:'j',age:11}
        ]
      }
    )
  }

  render(){
    return (
      <>
      <div>Hello</div>
      <button onClick={this.switchNameHandler}>Switch the name</button>  
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> I am the child element</Person>
      <Person name={this.state.persons[2].name} age={this.state.persons[0].age}/>
      </>
    )
  }
}


export default App;

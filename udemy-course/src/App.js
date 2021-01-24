import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {

  state  =  {
    persons : [
      {name: 'Girish',age: 28},
      {name: 'Dexter',age: 27},
      {name: 'John',age: 24}
    ],
    otherState : 'Some other value',
    showPersons : false
  }

   switchNameHandler = (newName) => {
   this.setState(
      {
        persons : [
          {name:newName,age:12},
          {name:'Dex',age:13},
          {name:'jojo',age:11}
        ]
      }
    )
  };

  nameChangHandler = (event) => {
    this.setState(
      {
        persons : [
          {name:'Girish',age:12},
          {name:event.target.value,age:13},
          {name:'jojo',age:11}
        ]
      }
    )
  };

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  }

  render(){

    return (
      <div className="App">
      <div>Hello</div>
      <button onClick={this.switchNameHandler}>Switch the name</button>  
      <button onClick={this.togglePersonsHandler}>Toggle Persons</button>  
      { this.state.showPersons ? 
        <div>
          <Person click={this.switchNameHandler.bind(this,'Girish Sukinkar')} name={this.state.persons[0].name} age={this.state.persons[0].age} />
          <Person click={this.switchNameHandler.bind(this,'Dexter Baxter')} changed={this.nameChangHandler} name={this.state.persons[1].name} age={this.state.persons[1].age}> I am the child element</Person>
          <Person name={this.state.persons[2].name} age={this.state.persons[0].age}/>
        </div> : null
      }
   
      </div>
    )
  }
  
}


export default App;

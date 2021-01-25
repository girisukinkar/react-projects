import React, { Component } from 'react';
import './App.css';
import person from './Person/Person';
import Person from './Person/Person';
class App extends Component {

  state  =  {
    persons : [
      {id: '1', name: 'Girish',age: 28},
      {id: '2', name: 'Dexter',age: 27},
      {id: '3', name: 'John',age: 24}
    ],
    otherState : 'Some other value',
    showPersons : false
  }

  /*  switchNameHandler = (newName) => {
   this.setState(
      {
        persons : [
          {name:newName,age:12},
          {name:'Dex',age:13},
          {name:'jojo',age:11}
        ]
      }
    )
  }; */

  deleteNameHandler = (id) => {

    const persons = [...this.state.persons];
    // persons.splice(persons, id);
    let p = persons.filter(person => person.id !== id);
    this.setState({persons : p});
  }

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

    let persons = null;
    if(this.state.showPersons){
      persons = (
       
        <div>
           {
          this.state.persons.map((person,index) => {
            return <Person key={person.id} name={person.name} age={person.age} click={() => this.deleteNameHandler(person.id)} />            
          })
        }
      </div> 
      );
    }

    return (
      <div className="App">
      <div>Hello</div>
      <button onClick={this.switchNameHandler}>Switch the name</button>  
      <button onClick={this.togglePersonsHandler}>Toggle Persons</button>  
       {persons}
      </div>
    )
  }
  
}


export default App;

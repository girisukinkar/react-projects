import React, { Component } from 'react';
import './App.css';
import person from './Person/Person';
import Person from './Person/Person';
import Validate from './Validate';
class App extends Component {

  state  =  {
    persons : [
      {id: '1', name: 'Girish',age: 28},
      {id: '2', name: 'Dexter',age: 27},
      {id: '3', name: 'John',age: 24}
    ],
    otherState : 'Some other value',
    showPersons : false,
    userString: ''
  }

  inputNamChangeHandler = (event) => {
    this.setState({
      userString : event.target.value
    })
  }

  deleteNameHandler = (id) => {

    const persons = [...this.state.persons];
    // persons.splice(persons, id);
    let p = persons.filter(person => person.id !== id);
    this.setState({persons : p});
  }


  nameChangHandler = (event,id) => {
  
    const person = this.state.persons.findIndex(p => { return p.id === id } );
    let temp = [...this.state.persons];
    temp[person].name = event.target.value
    this.setState(
      {
        persons : temp
      }
    )
  };

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  }

  render(){

    const style = {
      backgroundColor: 'white',
      font:'inherit',
      border:'1px solid',
      padding:'8px',
      cursor:'pointer'
    }

    let persons = null;
    if(this.state.showPersons){
      style.backgroundColor = 'red';
      style.color = 'white';
      persons = (
       
        <div>
          
           {
          this.state.persons.map((person,index) => {
            return <Person key={person.id} name={person.name} age={person.age} changed={(event) => this.nameChangHandler(event,person.id)} click={() => this.deleteNameHandler(person.id)} />            
          })
        }
      </div> 
      );
    }

    let classes = ['red','bold'].join(' ');

    return (
      <div className="App">
      <div className={classes}>Hello</div>
      <input type="text" onChange={(e) => this.inputNamChangeHandler(e)} value={this.state.userString}/>
      <Validate userString={this.state.userString} />
      
      <hr/>
      <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>  
       {persons}
      </div>
    )
  }
  
}


export default App;

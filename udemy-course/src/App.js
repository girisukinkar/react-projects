import React, { Component } from 'react';
// import styled from 'styled-components';
import Person from './Person/Person';
import Validate from './Validate';
import styles from './App.module.css';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
/* const StyledButton = styled.button`
background-color: ${props => props.alt ? 'red' : 'green'};
font:inherit;
border:1px solid;
padding:8px;
cursor:pointer;
color:white;

&:hover{
  background-color: ${props => props.alt ? 'salmon' : 'green'};
  color:black;
}
`;

 */

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
  };

  

  render(){

    // const style = {
    //   backgroundColor: 'white',
    //   font:'inherit',
    //   border:'1px solid',
    //   padding:'8px',
    //   cursor:'pointer'
    // }

    let persons = null;
    if(this.state.showPersons){
      // style.backgroundColor = 'red';
      // style.color = 'white';
      persons = (
       
        <div>
          
           {
          this.state.persons.map((person,index) => {
            return <ErrorBoundary key={person.id}>
              <Person  name={person.name} age={person.age} changed={(event) => this.nameChangHandler(event,person.id)} click={() => this.deleteNameHandler(person.id)} />            
            </ErrorBoundary>
          })
        }
      </div> 
      );
    }

    let classes = [];
    //Dynamically add / assign classes
    if(this.state.persons.length <= 2){
      classes.push('red');
    }
    if(this.state.persons.length <= 1){
      classes.push('bold');
    }
    classes = classes.join(' ');
    return (
      <div className={styles.App}>
      <div className={classes}>Hello</div>
      <input type="text" onChange={(e) => this.inputNamChangeHandler(e)} value={this.state.userString}/>
      <Validate userString={this.state.userString} />
      
      <hr/>
       {persons}
      {/* <StyledButton alt={this.state.showPersons} onClick={this.togglePersonsHandler}>Toggle Persons</StyledButton>   */}
      <button className={`${styles.Button} ${styles.Red}`} onClick={this.togglePersonsHandler}>Toggle Persons</button>  
      </div>
    )
  }
  
}


export default App;

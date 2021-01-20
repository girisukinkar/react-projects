import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';
const App = () => {

  const [personsState, switchPersonsState] = useState({
    persons : [
      {name: 'Girish',age: 28},
      {name: 'Dexter',age: 27},
      {name: 'John',age: 24}
    ],
    otherState : 'Some other value'
  });

  console.log(personsState);
  const switchNameHandler = () => {
    switchPersonsState(
      {
        persons : [
          {name:'Giri',age:12},
          {name:'Dex',age:13},
          {name:'j',age:11}
        ]
      }
    );
  }

    return (
      <>
      <div>Hello</div>
      <button onClick={switchNameHandler}>Switch the name</button>  
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}> I am the child element</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[0].age}/>
      </>
    )
  
}


export default App;

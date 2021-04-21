import React, { Component } from "react";
import PropTypes from 'prop-types';
import Person from "./Person/Person";
class Persons extends Component {

  
  render() {
    const pers =  this.props.persons.map((person) => {
     
        <Person
          key={person.id}
          name={person.name}
          age={person.age}
          changed={(event) => this.props.changed(event, person.id)}
          click={() => this.props.clicked(person.id)}
        />
  
    });

    return( pers);
  }
}

Persons.propTypes = {
  name : PropTypes.string,
  persons : PropTypes.array,
  changed : PropTypes.func,
  clicked : PropTypes.func
}


export default Persons;

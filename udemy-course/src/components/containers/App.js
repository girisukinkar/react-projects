import React, { Component } from "react";
import PropTypes from 'prop-types';
import "./App.css";
import Persons from "../Persons/Persons";
import Validate from "../../Validate";
import Cockpit from "../Cockpit/Cockpit";

class App extends Component {
  constructor(props){
    super(props);
    console.log('[App.js] constructor');
    this.state = {
      persons: [
        { id: "1", name: "Girish", age: 28 },
        { id: "2", name: "Dexter", age: 27 },
        { id: "3", name: "John", age: 24 },
      ],
      otherState: "Some other value",
      showPersons: false,
      userString: "",
    };
  }
 

  static getDerivedStateFromProps(props,state){
    console.log('[App.js ] Derived State', props);
    return state;
  }

  componentDidMount(){
    console.log('[App.js] Mounted');
  }


  inputNamChangeHandler(event){
    this.setState({
      userString: event.target.value,
    });
  }

  deleteNameHandler(id){
    const persons = [...this.state.persons];
    // persons.splice(persons, id);
    let p = persons.filter((person) => person.id !== id);
    this.setState({ persons: p });
  }

  nameChangHandler(event, id){
    const person = this.state.persons.findIndex((p) => {
      return p.id === id;
    });
    let temp = [...this.state.persons];
    temp[person].name = event.target.value;
    this.setState({
      persons: temp,
    });
  }

  togglePersonsHandler(){
    this.setState({
      showPersons: !this.state.showPersons,
    });
  }

  render() {
    console.log('[App.js] Render');
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid",
      padding: "8px",
      cursor: "pointer",
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = <div>{<Persons persons={this.state.persons} clicked={this.deleteNameHandler} changed={this.nameChangHandler} />}</div>;
    }

    return (
      <div className="App">
        <input type="text" onChange={(e) => this.inputNamChangeHandler(e)} value={this.state.userString} />
        <Validate userString={this.state.userString} />

        <hr />
        <Cockpit style={style} title={this.props.appTitle} persons={this.state.persons} clicked={this.togglePersonsHandler} />
        {persons}
        {/* <StyledButton alt={this.state.showPersons} onClick={this.togglePersonsHandler}>Toggle Persons</StyledButton>   */}
      </div>
    );
  }
}

App.propTypes = {
  appTitle : PropTypes.string
}

export default App;

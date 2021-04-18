import React from 'react';
import './Cockpit.css';
const cockpit = (props) => {
    let classes = ['red','bold'];
    //Dynamically add / assign classes
    if(props.persons.length <= 2){
      classes.push('red');
    }
    if(props.persons.length <= 1){
      classes.push('bold');
    } 

    return (  
        <div >
        <div className={classes.join('')}>{props.title}</div>
         <button style={props.style} onClick={props.clicked}>Toggle Persons</button>  
        </div>
    );
}
 
export default cockpit;
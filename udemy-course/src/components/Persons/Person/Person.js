import React from 'react';
import './Person.css';
import styled from 'styled-components';

const StyledDiv =  styled.div`
    border:1px solid #ccc;
    margin:10px auto;
    text-align: center;
    padding: 20px;
    box-shadow: 0 2px 3px #ccc;
    width: 80%;
    @media (min-width: 500px){
         width: 450px;
       
    }
`;
const person = (props) => {
    return (
          // <div className="Person">
       <StyledDiv>
        <p onClick={props.click}>My name is {props.name} and my age is {props.age}</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name} />
        </StyledDiv>
    )
}

export default person;
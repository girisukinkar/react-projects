import React from 'react';

const person = (props) => {
    return (
        <>
        <p>My name is {props.name} and my age is {props.age}</p>
        <p>{props.children}</p>
        </>
    )
}

export default person;
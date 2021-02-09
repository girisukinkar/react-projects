import React, { Component } from 'react';
const Validate = (props) => {
    let string = null;
    if(props.userString && props.userString.length > 5){
        
    }else if(props.userString && props.userString.length > 1){
        string = <p>String too short</p>
    }

    return(
        <div>{string}</div>
    )
}

export default Validate;
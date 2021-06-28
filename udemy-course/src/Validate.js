import React from 'react';
import PropTypes from 'prop-types';

const Validate = (props) => {
    let string = null;
    if(props.userString && props.userString.length > 5){
        console.log('Empty');
    }else if(props.userString && props.userString.length > 1){
        string = <p>String too short</p>
    }

    return(
        <div>{string}</div>
    )
}

Validate.propTypes = {
    userString : PropTypes.string
  }
  
export default Validate;
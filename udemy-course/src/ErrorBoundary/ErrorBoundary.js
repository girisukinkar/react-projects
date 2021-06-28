import React, { Component } from 'react';
import propTypes from 'prop-types';
class ErrorBoundary extends Component{
    state = {
        hasError: false,
        errorMessage:''
    }
    static getDerivedStateFromError(error) {    
        // Update state so the next render will show the  fallback UI.
        console.log(error);
            return { hasError: true }; 
     }

    componentDidCatch(error,info){
        console.log({info});
        this.setState({hasError:true, errorMessage:error})
    }

    render(){
        if(this.state.hasError){
            return <h1>{this.state.errorMessage}</h1>
        }else{
            return this.props.children
        }
    }
}

ErrorBoundary.propTypes = {
    children: propTypes.any
}

export default ErrorBoundary;
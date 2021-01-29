# react-projects
Learning react and trying out how to make mini projects to test what I understand and improve along the way

## Two ways of writing components
  
  Functional and Class based Note: Functional is lightweight and as of 16.8 react gave hooks to make it superpowerful like class components

## useState : Always returns two elements 
    The first element is the state, the second element is the function which allows state to modify or mutate

    Some Pros and Cons 🔥 
    E.g
 ```javascript
state = {
    persons : [
      {name: 'Girish',age: 28},
      {name: 'Dexter',age: 27},
      {name: 'John',age: 24}
    ],
    otherState : 'Some other value'
  };
```
  1. In function component if you change the state it will only show the modified values in the state upon log eg. useState({{persons: [{name:'giri}]}}); .. the rest of the values are not merged whereas

      ![image info](./assets/functional_state_log.png)

  2. In Class components if you do this.setState({persons: [{name:'giri}]}); it will still merge and show all the other state values as well

       ![image info](./assets/class_component_log.png)


## Two way binding
Data flows from owner to child in two way binding we enforce the same value is show at both places        

## How styling is implemented
In ways we can use css in React one way is to import and other is good old fashion inline-css and also you can store it in a variable

 ```javascript
  import './Person.css'; //Way 1

  const style = { //Way 2 
    backgroundColor: #EAEBEC;
  } 

  <div style={style} />
 ```

 Whenever the component loads the css code is loaded dynamically in a  style tag. And on bonus webpack adds the prefix the selectors for as many browsers as possible


 ## Conditionals inside the component

Example 1: Using the ternary operator way. It works and is good but we can improve
 ```javascript
{
  this.state.personsExists ? <div><Person /></div> : null  
} 
 ```
Example 2:  Much cleaner way of outputting the elements
 ```javascript
render(){
   /*Since render gets called all the time. This conditional logic makes 
   it much clean and readable*/

   let persons = null;

   if(this.state.personsExists){
     persons = (<Person/>);
   }

   return(
     {persons}
   )

}
 ```

 ## its always better to create variables and return in the JSX instead of ternary conditional rendering
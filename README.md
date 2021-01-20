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

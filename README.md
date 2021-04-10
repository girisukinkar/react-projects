# To run react on desired port
Create a .env file and initialise any number to PORT, EG.  PORT=4000 
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
  persons: [
    { name: "Girish", age: 28 },
    { name: "Dexter", age: 27 },
    { name: "John", age: 24 },
  ],
  otherState: "Some other value",
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

Whenever the component loads the css code is loaded dynamically in a style tag. And on bonus webpack adds the prefix the selectors for as many browsers as possible

## Conditionals inside the component

Example 1: Using the ternary operator way. It works and is good but we can improve

```javascript
{
  this.state.personsExists ? (
    <div>
      <Person />
    </div>
  ) : null;
}
```

Example 2: Much cleaner way of outputting the elements

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

## Dynamic Styling and Class switching

```javascript
  const style = {
    color:'white'
  }

//Normal Method
if(<condition>)
    style.color = 'red'

    //To add multiple dynamically use array and join in the end
    let classes = ['red','bold'];
    classes.join(' ');

// IMPORTANT NOTE: we cannot use psuedo selectors or media queries directly in inline, use a third party package called radium
```

## styled-components

Weird syntax to style the element
styled.div`` <- the css code goes inside the template literals

The package generates a random css class which you can inspeact in head and attaches css to it.

Advantage is you dont need to write inline css. Create a file with all the styled components and use it anywhere as you prefer

```javascript
const StyledButton = styled.button`
  border: 1px solid #ccc;
  box-shadow: 0 2px 3px #ccc;
  @media (min-width: 500px) {
    width: 450px;
  }
`;

Before: <button class="btn">BTN</button>;
After: <StyledButton>BTN</StyledButton>;
```

What about conditional css? if this class else this class. Well send a value as prop

```javascript
const StyledButton = styled.button`
  color: ${(props) => (props.alt ? "red" : "green")};
  border: 1px solid #ccc;
  box-shadow: 0 2px 3px #ccc;
  @media (min-width: 500px) {
    width: 450px;
  }
`;
<StyledButton alt={this.state.ifExists}>BTN</StyledButton>;
```

in this example the color will change according to the prop value;

## CSS MODULES

With CSS modules, you can write normal CSS code and make sure, that it only applies to a given component.

It's not using magic for that, instead it'll simply automatically generate unique CSS class names for you. And by importing a JS object and assigning classes from there, you use these dynamically generated, unique names. So the imported JS object simply exposes some properties which hold the generated CSS class names as values.

Example:

In Post.css File

```css
.Post {
  color: red;
}
```

In Post Component File

import classes from './Post.css';

```javascript
const post = () => <div className={classes.Post}>...</div>;
```

Here, classes.Post refers to an automatically generated Post property on the imported classes object. That property will in the end simply hold a value like Post**Post**ah5_1 .

So your .Post class was automatically transformed to a different class (Post**Post**ah5_1 ) which is unique across the application. You also can't use it accidentally in other components because you don't know the generated string! You can only access it through the classes object. And if you import the CSS file (in the same way) in another component, the classes object there will hold a Post property which yields a different (!) CSS class name. Hence it's scoped to a given component.

By the way, if you somehow also want to define a global (i.e. un-transformed) CSS class in such a .css file, you can prefix the selector with :global .

Example:

```css
:global .Post {
  ...;
}
```

Now you can use className="Post" anywhere in your app and receive that styling.

## ERROR HANDLING

    While in development we get to see error pages with line number and reasons but in production we are unable to see or handle such things thus making an error handling component that will display the error is helpful.
    eg. ErrorBoundary.js component
    Note: only use it at necessary places.

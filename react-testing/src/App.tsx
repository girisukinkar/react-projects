import React, { useState } from 'react';
import './App.css';

function App() {

  const [text,setText] = useState('');
  
  function handleChange(e: React.ChangeEvent<HTMLInputElement>){
      setText(e.target.value);
  }
  return (
    <div className="App">
     <CustomInput value={text} onChange={handleChange}>Input:</CustomInput>
     <p>You types : {text ? text : '...'}</p>
    </div>
  );
}

interface CustomInputProps{
  children: React.ReactNode;
  value:string;
  onChange(event: React.ChangeEvent<HTMLInputElement>) : void;
}

function CustomInput({children, value, onChange}  :CustomInputProps){
  return(
    <div>
      <label htmlFor="search">{children}</label>
      <input type="text" id="search" value={value} onChange={onChange} />
    </div>
  )
}

export default App;

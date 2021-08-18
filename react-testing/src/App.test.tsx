import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('When everything is ok', () =>{


  //As we wrote render(<App />); everytime and it was repetitive we can write
  beforeEach(()=>{

    render(<App />); //Check if the app renders without crashing
  }) ;

  test('should render the APP component', () =>{
    screen.debug();
  });

  test('should select the children and render in custominput component', () =>{
    screen.getByText('Input:');
    expect(screen.getByText(/input/i)).toBeInTheDocument();
  });

  test('should select input html element by its type', () =>{
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
  
  //get label text
  test('should select input html element by its label', () =>{
    expect(screen.getByLabelText('Input:')).toBeInTheDocument();
  });
  
  
  test('should select input html element its placeholder text', () =>{
    expect(screen.getByPlaceholderText('Example')).toBeInTheDocument();
  });
})
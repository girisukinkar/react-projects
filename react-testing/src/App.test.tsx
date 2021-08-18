import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('When everything is ok', () =>{

  test('should render the APP component', () =>{
    render(<App />); //Check if the app renders without crashing
    screen.debug();
  })
})
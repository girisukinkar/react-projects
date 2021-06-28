import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/containers/App';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

ReactDOM.render(
  <React.StrictMode>
   <ErrorBoundary>
    <App appTitle="Presons Project" />
   </ErrorBoundary>
   
  </React.StrictMode>,
  document.getElementById('root')
);



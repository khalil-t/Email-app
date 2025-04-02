import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Import your global CSS styles
import App from './App';  // Import your main App component
import reportWebVitals from './reportWebVitals';

// Load environment variables from .env file

// Initialize ReactDOM
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render your App component inside a React.StrictMode for better development practices
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optional: Measure and log performance metrics
reportWebVitals();

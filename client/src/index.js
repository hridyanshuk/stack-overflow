import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './css/index.css'
import './css/header.css'
import './css/sidebarleft.css'
import './css/sidebarright.css'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Router>
        <Routes>
          <Route path = '/*' element = {<App />} />
        </Routes>
    {/* <App /> */}
          
      {/*
        three routes for App, Sign in and Sign Out
      */}
      </Router>
      
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// Sign in
// Sign up
// Home (Shows watch questions)
// Questions (Shows all questions)
// Tags (Shows all tags)
// Users (Shows all users)
// Users/user (Profile page of user)
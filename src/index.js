import React from 'react';
import {
  BrowserRouter as Router
} from "react-router-dom";
import ReactDOM from 'react-dom';
import './index.css';
import Form from './Pages/Form/Form';

// import Result from './Pages/Result/Result';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Router>
    <Form />
  </Router>,
  document.getElementById('root')
);
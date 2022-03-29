import React from 'react';
import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";
import ReactDOM from 'react-dom';
import './index.css';
import Form from './Pages/Form/Form';
import Result from './Pages/Result/Result';
import Error from './Pages/Error/Error';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Form />} />
      <Route path="/result" element={<Result />} />
      <Route path="/error" element={<Error />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
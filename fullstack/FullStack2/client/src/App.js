import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import CourseList from './components/CourseList'
import DeleteCourse from './components/DeleteCourse';

function App() {
  

  return (
    <Router>
        <Routes>
            <Route path='/' element={<CourseList />} exact />
            <Route path='/delete/:id' element={<DeleteCourse />} exact />
        </Routes>
    </Router>
  );
}

export default App;

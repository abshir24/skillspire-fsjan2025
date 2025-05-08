import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import BookList from './components/BookList'

function App() {
  

  return (
      <Router>
          <Routes>
              <Route path='/' element={<BookList />} exact />
          </Routes>
      </Router>
  );
}

export default App;

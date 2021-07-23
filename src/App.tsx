import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MenuRoute from './Components/MenuRoute/MenuRoute';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Route path="/">
          <MenuRoute />
        </Route>




      </Router>
        
    </div>
  );
}

export default App;

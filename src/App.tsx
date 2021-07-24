import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MenuRoute from './Components/MenuRoute/MenuRoute';
import { ItemContextProvider } from './Context/MenuContextProvider';
import DetailsRoute from './Components/DetailsRoute/DetailsRoute';

function App() {
  return (
    <div className="App">
      <Router>
        <ItemContextProvider>
          <Header />
          <Route path="/">
            <MenuRoute />
          </Route>

          <Switch>
            <Route path="/DetailsRoute/:id">
              <DetailsRoute />
            </Route>

            
          </Switch>



        </ItemContextProvider>
      </Router>
        
    </div>
  );
}

export default App;

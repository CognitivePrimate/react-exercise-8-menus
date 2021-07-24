import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MenuRoute from './Components/MenuRoute/MenuRoute';
import { ItemContextProvider } from './Context/MenuContextProvider';
import DetailsRoute from './Components/DetailsRoute/DetailsRoute';

function App() {
  return (
    <Router>
        <Header />
          <Switch>
            {/* home */}
          <Route path="/" exact>
            <ItemContextProvider>
              <MenuRoute />
            </ItemContextProvider>  
          </Route>
          
            {/* details */}
            <Route path="/DetailsRoute/:id" exact>
              <ItemContextProvider>
                <DetailsRoute />
              </ItemContextProvider>
            </Route>
          </Switch>
      </Router>  
      
  );
}

export default App;

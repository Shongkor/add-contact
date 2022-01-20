import React from 'react';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import Navigation from './Component/NavigationBar/Navigation';
import AddComponent from './Component/AddComponent/AddComponent';
import EditComponent from './Component/EditComponent/EditComponent';
import Home from './Component/Home/Home';

const App= () => {
  return (
    <div>
      <Navigation />
      <ToastContainer />
      <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/add">
              <AddComponent />
            </Route>
            <Route path="/edit/:id">
              <EditComponent />
            </Route>
        </Switch>
      
    </div>
  );
}

export default App;

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import NotFound from './Common/NotFound';
import Header from './Common/Header';
import Home from './Home/Home';
import People from './People/People';



function App() {
  const BASE_URL = 'https://swapi.dev/api';
  return (
    <>
    <main className="container">
    <Header />
    <Switch>
      <Route exact={true} path='/'>
        <Home />
      </Route>
      <Route path='/people'>
        <h1>People Screen</h1>
        <People BASE_URL={BASE_URL}/> 
      </Route>
      <Route path='/planets'>
        <h1>Planets Screen</h1>
      </Route>
      <Route path='/films'>
        <h1>Films Screen</h1>
      </Route>
      <Route path='/species'>
        <h1>Species Screen</h1>
      </Route>
      <Route path='/vehicles'>
        <h1>Vehicles Screen</h1>
      </Route>
      <Route path='/starships'>
        <h1>Starships Screen</h1>
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
    </main>
    </>  
  );
}

export default App;

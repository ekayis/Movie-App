import React from 'react';
import logo from './logo.svg';
import './App.css';
import MoviesPage from './components/pages/MoviesPage'
import {Link,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Link to="movies">Movies</Link>
      <Route path='/movies' component={MoviesPage}></Route>
    </div>
  );
}

export default App;

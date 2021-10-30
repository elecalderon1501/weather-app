import React from 'react';
import SearchBar from './SearchBar.jsx';
import './Nav.css';
import titulo from './Nav.css'

function Nav({onSearch}) {
  return (
    <div>
      <span className= { titulo }>Weather App</span>
      <SearchBar onSearch = {onSearch}/>
    </div>
  );
   
};

export default Nav;
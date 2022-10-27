import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import Gallery from './components/Gallery';

function App() {
  let [search, setSearch] = useState('');
  let [message, setMessage] = useState('Search for Music!');
  let [data, setData] = useState([]);


  return (
    <div className='App'>
      <SearchBar />
      {message}
      <Gallery />
    </div>
  );
}

export default App;

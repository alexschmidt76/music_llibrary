import React, { useEffect, useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import Gallery from './components/Gallery';

function App() {
  let [search, setSearch] = useState('');
  let [message, setMessage] = useState('Search for Music!');
  let [data, setData] = useState([]);

  const API_URL = 'https://itunes.apple.com/search?term=';

  useEffect(() => {
    if (search) {
      const fetchData = async () => {
        document.title = `${search} Music`;
        const response = await fetch(API_URL + search);
        const resData = await response.json();
        if (resData.resultCount > 0) {
          setData(resData.results);
          setMessage('Showing Results for ' + search);
        } else {
          setMessage('Not Found');
        }
      }
      fetchData();
    }
  }, [search]);

  const handleSearch = (e, term) => {
    e.preventDefault();
    setSearch(term);
  }

  return (
    <div className='App'>
      <SearchBar handleSearch={handleSearch} />
      {message}
      <Gallery data={data} />
    </div>
  );
}

export default App;

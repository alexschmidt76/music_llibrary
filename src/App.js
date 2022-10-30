import { useEffect, useState, useRef } from 'react';
import './App.css';

import SearchBar from './components/SearchBar';
import Gallery from './components/Gallery';
import { DataContext } from './context/DataContext';
import { SearchContext } from './context/SearchContext';

function App() {
  let [message, setMessage] = useState('Search for Music!');
  let [data, setData] = useState([]);
  let searchInput = useRef('');

  const API_URL = 'https://itunes.apple.com/search?term=';

  const handleSearch = (e, term) => {
    e.preventDefault();
    // fetch data
    const fetchData = async () => {
      document.title = `${term} Music`;
      const response = await fetch(API_URL + term);
      const resData = await response.json();
      if (resData.resultCount > 0) {
        setData(resData.results);
        setMessage('Showing Results for ' + term);
      } else {
        setMessage('Not Found');
      }
    }
    fetchData();
  }

  return (
    <div className='App'>
      <SearchContext.Provider value={{
        term: searchInput,
        handleSearch: handleSearch
      }}>
        <SearchBar />
      </SearchContext.Provider>
      {message}
      <DataContext.Provider value={data}>
        <Gallery />
      </DataContext.Provider>
    </div>
  );
}

export default App;

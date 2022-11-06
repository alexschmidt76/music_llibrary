import { useState, Fragment, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

import SearchBar from './components/SearchBar';
import Gallery from './components/Gallery';
import AlbumView from './components/AlbumView';
import ArtistView from './components/ArtistView';
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
      <Router>
        <Routes>
          <Route path='/' element={
            <Fragment>
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
            </Fragment>
          } />
          <Route path='/album/:id' element={<AlbumView />} />
          <Route path='/artist/:id' element={<ArtistView />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
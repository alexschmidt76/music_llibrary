import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar';
import Gallery from './components/Gallery';

function App() {
  let [search, setSearch] = useState('');
  let [message, setMessage] = useState('Search for Music!');
  let [data, setData] = useState([]);


  return (
    <div>
      <SearchBar />
      {message}
      <Gallery />
    </div>
  );
}

export default App;

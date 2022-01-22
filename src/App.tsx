import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BreweryApi from './interfaces/brewery_interface';
import BreweriesList from './components/BreweriesList';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {

  const [breweries, setBreweries] = useState<BreweryApi[]>([]);
  const [filter, setNewFilter] = useState('');

  useEffect(() => {
    axios.get('https://api.openbrewerydb.org/breweries')
      .then(resposnse => {
        setBreweries(resposnse.data)
      })
  }, []);

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewFilter(event.target.value)
  }

  return (
    <div style={{ width: "70%", backgroundColor: "grey", margin: "auto" }} >
      <SearchBar filter={filter} handleFilterChange={handleFilterChange} />
      <BreweriesList data={breweries} filter={filter} />
    </div>
  );
}

export default App;

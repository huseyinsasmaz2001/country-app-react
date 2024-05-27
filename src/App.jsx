import { useEffect, useState } from 'react';
import CountryList from './CountryList';
import Filter from './Filter';
import SearchBar from './SearchBar';
import CountryDetails from './CountryDetails';
import './App.css';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [continent, setContinent] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        if (!response.ok) {
          throw new Error('Failed to fetch countries');
        }
        const data = await response.json();
        setCountries(data);
        setFilteredCountries(data);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    let result = countries;
    if (continent) {
      result = result.filter(country => country.region === continent);
    }
    if (searchQuery) {
      result = result.filter(country => country.name.common.toLowerCase().includes(searchQuery.toLowerCase()));
    }
    setFilteredCountries(result);
  }, [continent, searchQuery, countries]);

  return (
    <div className="app">
      <h1 className="title">Explorez le Monde</h1>
      <div className="controls">
        <Filter setContinent={setContinent} />
        <SearchBar setSearchQuery={setSearchQuery} />
      </div>
      {selectedCountry ? (
        <CountryDetails country={selectedCountry} setSelectedCountry={setSelectedCountry} />
      ) : (
        <CountryList countries={filteredCountries} setSelectedCountry={setSelectedCountry} />
      )}
    </div>
  );
};

export default App;

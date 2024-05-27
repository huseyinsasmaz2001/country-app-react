import PropTypes from 'prop-types';
import './SearchBar.css';

const SearchBar = ({ setSearchQuery }) => {
        const handleSearchChange = (event) => {
            setSearchQuery(event.target.value);
        };
    
        return (
            <input
                type="text"
                placeholder="Rechercher un pays"
                onChange={handleSearchChange}
                className="search-bar"
            />
        );
    };

SearchBar.propTypes = {
    setSearchQuery: PropTypes.func.isRequired,
};

export default SearchBar;
  
 
  
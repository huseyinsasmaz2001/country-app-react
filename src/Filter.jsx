
import PropTypes from 'prop-types';
import './Filter.css';

const Filter = ({ setContinent }) => {
    const handleContinentChange = (event) => {
        setContinent(event.target.value);
    };

    return (
        <select
            onChange={handleContinentChange}
            className="filter-select"
        >
            <option value="">Tous les continents</option>
            <option value="Africa">Afrique</option>
            <option value="Americas">Amériques</option>
            <option value="Asia">Asie</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Océanie</option>
        </select>
    );
};

Filter.propTypes = {
    setContinent: PropTypes.func.isRequired,
};

  
  export default Filter;
  
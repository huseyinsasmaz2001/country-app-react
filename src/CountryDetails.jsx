import PropTypes from 'prop-types'; 
import './CountryDetails.css'; 

// Définit le composant CountryDetails en tant que fonction fléchée prenant deux paramètres : country et setSelectedCountry
const CountryDetails = ({ country, setSelectedCountry }) => {
    return (
        <div className="country-details">
            {/* Définit une div avec la classe CSS "country-details" */}
            <button onClick={() => setSelectedCountry(null)} className="back-button">Retour à la liste</button>
            {/* Définit un bouton avec un gestionnaire d'événements onClick qui appelle la fonction setSelectedCountry avec la valeur null lorsqu'il est cliqué */}
            <h2>{country.name.common}</h2>
            {/* Affiche le nom commun du pays dans un élément h2 */}
            <img src={country.flags.png} alt={`Flag of ${country.name.common}`} className="flag-detail" />
            {/* Affiche l'image du drapeau du pays avec l'attribut alt décrivant le pays */}
            <div className="details-grid">
                {/* Définit une div avec la classe CSS "details-grid" */}
                <p><strong>Capital:</strong> {country.capital}</p>
                {/* Affiche la capitale du pays */}
                <p><strong>Region:</strong> {country.region}</p>
                {/* Affiche la région du pays */}
                <p><strong>Subregion:</strong> {country.subregion}</p>
                {/* Affiche la sous-région du pays */}
                <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
                {/* Affiche la population du pays avec un formatage numérique */}
                <p><strong>Area:</strong> {country.area.toLocaleString()} km²</p>
                {/* Affiche la superficie du pays avec un formatage numérique et l'unité km² */}
                <p><strong>Languages:</strong> {Object.values(country.languages).join(', ')}</p>
                {/* Affiche les langues parlées dans le pays en les séparant par une virgule */}
                <p><strong>Currencies:</strong> {Object.values(country.currencies).map(c => c.name).join(', ')}</p>
                {/* Affiche les devises utilisées dans le pays en les séparant par une virgule */}
            </div>
        </div>
    );
};

// Définit les types de propriétés attendues pour le composant CountryDetails à l'aide de PropTypes
CountryDetails.propTypes = {
    country: PropTypes.shape({
        name: PropTypes.shape({
            common: PropTypes.string.isRequired // Le nom commun du pays est une chaîne de caractères requise
        }).isRequired,
        flags: PropTypes.shape({
            png: PropTypes.string.isRequired // L'URL du drapeau du pays est une chaîne de caractères requise
        }).isRequired,
        capital: PropTypes.string.isRequired, // La capitale du pays est une chaîne de caractères requise
        region: PropTypes.string.isRequired, // La région du pays est une chaîne de caractères requise
        subregion: PropTypes.string.isRequired, // La sous-région du pays est une chaîne de caractères requise
        population: PropTypes.number.isRequired, // La population du pays est un nombre requis
        area: PropTypes.number.isRequired, // La superficie du pays est un nombre requis
        languages: PropTypes.object.isRequired, // Les langues parlées dans le pays sont un objet requis
        currencies: PropTypes.object.isRequired // Les devises utilisées dans le pays sont un objet requis
    }).isRequired,
    setSelectedCountry: PropTypes.func.isRequired // La fonction setSelectedCountry est une fonction requise
};

export default CountryDetails; // Exporte le composant CountryDetails par défaut pour pouvoir l'utiliser dans d'autres fichiers
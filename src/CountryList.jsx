import PropTypes from 'prop-types'; // Importation du module PropTypes pour la validation des types de données
import './CountryList.css'; // Importation du fichier CSS pour le style du composant

const CountryList = ({ countries, setSelectedCountry }) => { // Définition du composant CountryList avec deux props : countries et setSelectedCountry
    return (
        <div className="country-list"> {/* Définition d'une div avec la classe "country-list" */}
            {countries.map(({ cca3, name, flags }) => ( // Utilisation de la méthode map pour itérer sur le tableau countries et extraire les propriétés cca3, name et flags de chaque élément
                <div
                    key={cca3} // Utilisation de la propriété unique cca3 comme clé pour chaque élément de la liste
                    className="country-card" // Définition de la classe "country-card" pour chaque div
                    onClick={() => setSelectedCountry(countries.find(country => country.cca3 === cca3))} // Définition d'une fonction de rappel onClick qui appelle la fonction setSelectedCountry avec le pays correspondant à la clé cca3
                >
                    <div className="flag-container"> {/* Définition d'une div avec la classe "flag-container" */}
                        <img
                            src={flags.png} // Utilisation de la propriété flags.png pour définir la source de l'image
                            alt={`Flag of ${name.common}`} // Définition de l'attribut alt de l'image avec le nom commun du pays
                            className="flag" // Définition de la classe "flag" pour l'image
                        />
                        <div className="country-name"> {/* Définition d'une div avec la classe "country-name" */}
                            <h2>{name.common}</h2> {/* Affichage du nom commun du pays dans un élément h2 */}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

CountryList.propTypes = { // Définition des types de données attendus pour les props du composant
    countries: PropTypes.array.isRequired, // Le prop countries doit être un tableau et est requis
    setSelectedCountry: PropTypes.func.isRequired, // Le prop setSelectedCountry doit être une fonction et est requis
};
   
export default CountryList; // Exportation du composant CountryList par défaut

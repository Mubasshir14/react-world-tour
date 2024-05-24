import { useState } from 'react';
import './Country.css';
import CountryDetails from '../CountryDetails/CountryDetails';

const Country = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
    console.log(country);
    const { name, flags, capital, continents, cca3 } = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
    };

    return (
        <div className={`country ${visited && 'visited'}`}>
            <h2>{name?.common}</h2>
            <img src={flags.png} alt={`Flag of ${name?.common}`} />
            <h3><small>{capital}</small></h3>
            <h3><small>{continents}</small></h3>
            <p>Code: <small>{cca3}</small></p>
            <hr />
            <button onClick={() => handleVisitedCountry(country)}>Mark Visited</button> 
            <hr />
            <button onClick={() => handleVisitedFlags(flags.png)}>Add Flag</button> 
            <hr />
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            {visited && 'I have visited.'}
            <hr />
            <CountryDetails 
                country={country}
                handleVisitedCountry={handleVisitedCountry}
                handleVisitedFlags={handleVisitedFlags}
            />
        </div>
    );
};

export default Country;

import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './Countries.css';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, []);

    const handleVisitedCountry = country => {
        console.log('Add to List', country.name.common);
        if (!visitedCountries.includes(country)) {
            const newVisitedCountries = [...visitedCountries, country];
            setVisitedCountries(newVisitedCountries);
        }
    };

    const handleVisitedFlags = flag => {
        if (!visitedFlags.includes(flag)) {
            const newVisitedFlags = [...visitedFlags, flag];
            setVisitedFlags(newVisitedFlags);
        }
    };

    return (
        <div className="countries">
            <h3>Countries: {countries.length}</h3>
            {/* Visited Country */}
            <div>
                <h5>Visited Countries: {visitedCountries.length}</h5>
                <ol>
                    {visitedCountries.map(country => (
                        <li key={country.cca3}>{country.name.common}</li>
                    ))}
                </ol>
            </div>
            {/* Flag Container */}
            <div className="flag-container">
                {visitedFlags.map((flag, idx) => (
                    <img key={idx} src={flag} alt="flag" />
                ))}
            </div>
            {/* Display Country */}
            <div className="country-container">
                {countries.map(country => (
                    <Country 
                        handleVisitedFlags={handleVisitedFlags}
                        handleVisitedCountry={handleVisitedCountry}
                        key={country.cca3}
                        country={country}
                    />
                ))}
            </div>
        </div>
    );
};

export default Countries;

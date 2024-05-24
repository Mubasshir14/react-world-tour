import CountryData from "../CountryData/CountryData";

const CountryDetails = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
    return (
        <div>
            <h4>Country Details</h4>
            <hr />
            <CountryData 
                country={country}
                handleVisitedCountry={handleVisitedCountry}
                handleVisitedFlags={handleVisitedFlags}
            />
        </div>
    );
};

export default CountryDetails;

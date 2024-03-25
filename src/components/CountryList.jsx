import Country from "./Country";



const CountryList = ({title, countries, handleVisitedCountry, buttonLabel}) => {

    const mappedCountries = countries.map(country =>{ 
        return <Country country={country} key={country.id} handleVisitedCountry={handleVisitedCountry} buttonLabel={buttonLabel} />
});

    return (
        <>
        <h2>{title} </h2>
        {mappedCountries}   
        </>


    );
};

export default CountryList;
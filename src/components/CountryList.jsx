import Country from "./Country";
import './CountryList.css'




const CountryList = ({title, countries, handleVisitedCountry, buttonLabel}) => {

    const mappedCountries = countries.map(country =>{ 
        return <Country country={country} key={country.id} handleVisitedCountry={handleVisitedCountry} buttonLabel={buttonLabel} />
});

    return (
        <>
        <h2>{title} </h2>
        <div className='list'>
           {mappedCountries}   
        </div>

        </>


    );
};

export default CountryList;
import Country from "./Country";



const CountryList = ({title, countries}) => {

    const mappedCountries = countries.map(country =>{ 
        return <Country country={country} key={country.id} />
});

    return (
        <>
        <h2>{title} </h2>
        {mappedCountries}   
        </>


    );
};

export default CountryList;
const Country = ({country}) => {


    return (

        <>
        <h3>{country.name.official}  {country.flag}</h3>
        <p>Capital: {country.capital} </p>
        <p> Region: {country.region}</p>
        
        </>


    );
};

export default Country;
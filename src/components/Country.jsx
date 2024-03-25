import './Country.css'

const Country = ({country, handleVisitedCountry, buttonLabel}) => {

    const handleClick = () => {
            handleVisitedCountry(country);    
        }

    return (

        <div className='country'>
            <h3>{country.name.official} </h3>
            <p>Capital: {country.capital} </p>
            <p> Region: {country.region}</p>
            <img src = {country.flags.png} alt="" />
            <button id='button' type="button" onClick={handleClick}>{buttonLabel}</button>

        </div>
    

    );
 
};

export default Country;
import './Country.css'

const Country = ({country}) => {

    const handleClick = () => {
        console.log('clicked');
    }


    return (

        <div className='country'>
        <h3>{country.name.official} </h3>
        <p>Capital: {country.capital} </p>
        <p> Region: {country.region}</p>
        <img src = {country.flags.png} alt="" />


        <input type="checkbox" id="checkbox" name='checkbox' onClick={handleClick}/>
       

        </div>
    

    );
 
};

export default Country;
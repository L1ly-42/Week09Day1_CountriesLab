import { useState, useEffect } from "react";
import CountryList from "../components/CountryList";
import './CountryContainer.css';



const CountryContainer = () => {

    const [countries, setCountries] = useState(null);
    const[visitedCountries, setVisitedCountries] = useState(null)

     //fetching data 
     const loadCountries = async() =>{
        const response = await fetch('https://restcountries.com/v3.1/all');
        const jsonData = await response.json();
        setCountries(jsonData);
    }

    //using useEffect to get the data to load when the app runs 
    useEffect(() => {
        loadCountries();
    }, []);

    useEffect(() =>{
        console.log(countries);
    },[countries]);


    return (
        <div className='countryContainer'>
        <div className='countryList'>

        {countries ? <CountryList title= 'Countries:' countries={countries} onButtonClick='addVisitorCountry'/>
           : <p>Loading</p>}


        </div>

        <div className='visitedCountryList'>

           {visitedCountries ? <CountryList title= 'Visited Countries:' countries={visitedCountries}/>
           : <h2>Visited Countries:</h2>}

        </div>
     


        </div>
    ); 
};



export default CountryContainer;


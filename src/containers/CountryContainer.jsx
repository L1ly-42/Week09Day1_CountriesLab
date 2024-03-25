import { useState, useEffect } from "react";
import CountryList from "../components/CountryList";

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
        <>
           {countries ? <CountryList title= 'Countries' countries={countries}/>
           : <p>Loading</p>}

           {visitedCountries ? <CountryList title= 'Visited Countries' countries={visitedCountries}/>
           : <h2>Visited Countries</h2>}

        </>
    ); 
};



export default CountryContainer;


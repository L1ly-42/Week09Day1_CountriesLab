import { useState, useEffect } from "react";
import CountryList from "../components/CountryList";

const CountryContainer = () => {

    const [countries, setCountries] = useState(null);

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
            {JSON.stringify(countries)}
        </>
    ); 
};

export default CountryContainer;


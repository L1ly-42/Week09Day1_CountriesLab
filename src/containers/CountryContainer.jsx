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


        //Function for handling the country list toggling
        const handleVisitedCountry = (country) => {

            if(countries.includes(country)){
                VisitCountry(country);
            } else {unVisitCountry(country);}
             
        }


        //Functions for adding a new country to the visited country list
         const VisitCountry = (visitedCountry) => {
            removeCountryFromMainList(visitedCountry);
    
            if(visitedCountries == null){
                setVisitedCountries([visitedCountry]);
            }
            else{
            setVisitedCountries([...visitedCountries, visitedCountry]);
            }
        }

        //Functions for moving Visited country back to main list

        const unVisitCountry = (countryToUnvisit) =>{
            removeCountryFromVisitedList(countryToUnvisit);
            if(countries == null){
                setCountries([countryToUnvisit]);
            }
            else{
            setCountries([...countries, countryToUnvisit]);
            }
        }




        //Functions that Handle Country deletion from different lists 

        const removeCountryFromMainList = (countryToRemove) => {
            const countryIndex = countries.indexOf(countryToRemove);
            countries.splice(countryIndex, 1);
            setCountries([...countries]);
        }

        const removeCountryFromVisitedList = (countryToRemove) => {
        const countryIndex = visitedCountries.indexOf(countryToRemove);
        visitedCountries.splice(countryIndex, 1);
        setVisitedCountries([...visitedCountries]);    
    }




    return (
        <div className='countryContainer'>
        <div className='countryList'>

        {countries ? <CountryList title= 'All Countries:' countries={countries} handleVisitedCountry={handleVisitedCountry} buttonLabel='Visited!'/>
           : <p>Loading</p>}


        </div>

        <div className='visitedCountryList'>

           {visitedCountries ? <CountryList title= 'Visited Countries:' countries={visitedCountries} handleVisitedCountry={handleVisitedCountry} buttonLabel='Not actually visited...'/>
           : <h2>Visited Countries:</h2>}

        </div>
     


        </div>
    ); 
};



export default CountryContainer;


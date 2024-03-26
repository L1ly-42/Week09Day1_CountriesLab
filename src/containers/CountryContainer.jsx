import { useState, useEffect } from "react";
import CountryList from "../components/CountryList";
import './CountryContainer.css';
import SearchForm from "../components/SearchForm";



const CountryContainer = () => {


    //UseStates
    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);
    const[visitedCountries, setVisitedCountries] = useState([]);

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

            if(countries.includes(country) || (filteredCountries && filteredCountries.includes(country))){
                VisitCountry(country);
            } else {unVisitCountry(country);
            };
        };
            
        

        //Function for adding a new country to the visited country list
         const VisitCountry = (visitedCountry) => {

           // checking which list (filtered or unfiltered) to remove country from
            if(filteredCountries){
                removeCountryFromFilteredlist(visitedCountry);
            }
            if(countries){
                removeCountryFromMainList(visitedCountry);
            }

            //adding country to the visited list
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

            if(filteredCountries){
                if(filteredCountries == null){
                    setFilteredCountries([countryToUnvisit]);
                }
                else{
                setFilteredCountries([...filteredCountries, countryToUnvisit]);
                };
            };

            if(countries == null){
                setCountries([countryToUnvisit]);
            }
            else{
            setCountries([...countries, countryToUnvisit]);
            };
        };


        //Functions that handles deletion of the countries from the lists 
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

    const removeCountryFromFilteredlist = (countryToRemove) => {
        if(filteredCountries){
            const countryIndex = filteredCountries.indexOf(countryToRemove);
            filteredCountries.splice(countryIndex, 1);
            setFilteredCountries([...filteredCountries])
        };
    }

    //EXTENSION - loads filtered data

    const filterCountries = async(searchTerm) => {
        const response = await fetch(`https://restcountries.com/v3.1/name/${searchTerm}`);
        const filteredJsonData = await response.json();
        setFilteredCountries(filteredJsonData);
        console.log(filteredCountries);
    }
        
    return (
        <>
          <header>
             <h1>Countries Bucket List</h1>
             <div className='form'>
                <SearchForm filterCountries={filterCountries} setFilteredCountries={setFilteredCountries} />
             </div>
          </header>
          <main>
                <div className='countryList'>
                    <CountryList title= '(Filtered) Still to Visit:' countries={filteredCountries} handleVisitedCountry={handleVisitedCountry} buttonLabel='Visited!'/>
                    <CountryList title= 'Still to Visit:' countries={countries} handleVisitedCountry={handleVisitedCountry} buttonLabel='Visited!'/>
           
                </div>

                <div className='visitedCountryList'>
                  <CountryList title= 'Visited:' countries={visitedCountries} handleVisitedCountry={handleVisitedCountry} buttonLabel='Not actually visited...'/>
             
                </div>
            </main>
     </>
    ); 
};



export default CountryContainer;


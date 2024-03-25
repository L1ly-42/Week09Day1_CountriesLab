import { useState } from "react";

const SearchForm = ( {setFilteredCountries, filterCountries}) => {

    //UseStates
    const [searchTerm,setSearchTerm] = useState("")

    //Function that filters country by the search term
    const submitSearch = (e) => {
        e.preventDefault();
        if(searchTerm && searchTerm !=' '){
            filterCountries(searchTerm);
        }
        setFilteredCountries(null);
        
       

    }



    return ( 
      
        <form onSubmit={submitSearch}>
            <input 
            type="text"
            name="countrySearch"
            placeholder="Search Countries!"
            value={searchTerm}
            onChange={(e)=> setSearchTerm(e.target.value)}
             />
             <input type="submit" name="submit" />
        </form>
     );
}
 
export default SearchForm;
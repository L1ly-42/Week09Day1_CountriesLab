import { useState } from "react";

const SearchForm = ( {filterCountries}) => {

    //UseStates
    const [searchTerm,setSearchTerm] = useState("")

    //Function that filters cake by the search term
    const submitSearch = (e) => {
        e.preventDefault()
        filterCountries(searchTerm);
        console.log(searchTerm);
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
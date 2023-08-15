import axios from "axios";

const SearchBar = ({countryName, setCountryName, setCountries}) => {
    const handleChange = event => {
        setCountryName(event.target.value)
        axios
            .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
            .then(response => {
                const countryList = response.data.filter(country => country.name.common.toLowerCase().includes(countryName))
                setCountries(countryList)
            })
    }

    return (
        <input required value={countryName} onChange={handleChange}/>
    )
}

export default SearchBar;
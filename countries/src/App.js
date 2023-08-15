import {useState} from "react"
import SearchBar from "./components/SearchBar"
import Countries from "./components/Countries";

function App() {
    const [countryName, setCountryName] = useState('')
    const [countries, setCountries] = useState([])

    return (
        <div className="App">
            <h1>Find countries</h1>
            <SearchBar countryName={countryName} setCountryName={setCountryName} setCountries={setCountries}/>
            <Countries countries={countries}/>
        </div>
    );
}

export default App;

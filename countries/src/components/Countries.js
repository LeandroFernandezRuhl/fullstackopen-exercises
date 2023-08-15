const Countries = ({countries}) => {
    if (countries.length >= 10) {
        return (
            <p>Too many matches, try a more specific name</p>
        )
    }

    if (countries.length === 1) {
        return <IndividualCountry countryObj={countries[0]}/>
    }

    return (
        <ul>
            {
                countries.map(countryObj => <CountryListItem key={countryObj.name.common} countryObj={countryObj}/>)
            }
        </ul>
    )
}

const CountryListItem = ({countryObj}) => {
    return (
        <li>
            {countryObj.name.common}
        </li>
    )
}

const IndividualCountry = ({countryObj}) => {
    return (
        <>
            <h2>{countryObj.name.common}</h2>
            <p>Capital: {countryObj.capital}</p>
            <p>Area: {countryObj.area}</p>
            <ul>
                {Object.entries(countryObj.languages).map(([key, value]) =>
                    <li key={value}>
                        {value}
                    </li>)}
            </ul>
            <p style={{ fontSize: '2rem' }}>{countryObj.flag}</p>
        </>
    )
}

export default Countries
const Persons = ({persons, filterName}) => {
    const getFilteredList = () => {
        let filteredList = persons.filter((person) => person.name.toLowerCase().includes(filterName))
        return filteredList.map(person => <Person key={person.id} person={person}/>)
    }

    return (
        <ul>
            {getFilteredList()}
        </ul>
    )
}

const Person = ({person}) => {
    return (
        <li>{person.name} {person.number}</li>
    )
}

export default Persons
import personService from "../services/persons"

const Persons = ({persons, setPersons, filterName}) => {
    const getFilteredList = () => {
        let filteredList = persons.filter((person) => person.name.toLowerCase().includes(filterName))
        return filteredList.map(person => <Person key={person.id} person={person} persons={persons}
                                                  setPersons={setPersons}/>)
    }

    return (
        <ul>
            {getFilteredList()}
        </ul>
    )
}

const Person = ({person, persons, setPersons}) => {
    const handleDelete = () => {
        if (window.confirm(`Delete ${person.name}?`))
            personService
                .deleteById(person.id)
                .then(() => {
                    const updatedList = persons.filter(obj => obj.id !== person.id)
                    setPersons(updatedList)
                })
    }

    return (
        <li>
            {person.name} {person.number}
            <button onClick={handleDelete}>delete</button>
        </li>
    )
}

export default Persons
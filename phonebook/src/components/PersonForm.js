import personService from "../services/persons"

const PersonForm = ({newName, setNewName, newNumber, setNewNumber, persons, setPersons, setNotification}) => {

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    const handleExistentPerson = (existentPerson) => {
        if (window.confirm(`${existentPerson.name} is already added in the phonebook, replace the old number with a new one?`)) {
            const updatedPerson = {...existentPerson, number: newNumber}
            personService
                .update(existentPerson.id, updatedPerson)
                .then(returnedPerson => {
                    setNotification({
                        message: `${existentPerson.number} successfully changed to ${updatedPerson.number}`,
                        causedByAnError: false
                    })
                    setTimeout(() => {
                        setNotification({
                            message: null,
                            causedByAnError: false
                        })
                    }, 5000)
                    setPersons(persons.map(person => person.id !== updatedPerson.id ? person : updatedPerson))
                })
                .catch(error => {
                    setNotification({
                        message: `Information of ${existentPerson.name} has already been removed from the server`,
                        causedByAnError: true
                    })
                    setTimeout(() => {
                        setNotification({
                            message: null,
                            causedByAnError: false
                        })
                    }, 5000)
                    setPersons(persons.filter(person => person.id !== existentPerson.id))
                })
        }
    }

    const addPerson = (event) => {
        event.preventDefault()
        const newPerson = {
            name: newName,
            number: newNumber,
            id: Math.floor(Math.random() * 100000)
        }

        const existentPerson = persons.find(person => person.name === newPerson.name)
        if (existentPerson) {
            handleExistentPerson(existentPerson)
        } else {
            personService
                .create(newPerson)
                .then(returnedPerson => {
                    setNotification({
                        message: `${newPerson.name} successfully added to the phonebook`,
                        causedByAnError: false
                    })
                    setTimeout(() => {
                        setNotification({
                            message: null,
                            causedByAnError: false
                        })
                    }, 5000)

                    setPersons(persons.concat(returnedPerson))
                    setNewName("")
                    setNewNumber("")
                })
                .catch(error => {
                    alert(
                        `The id ${newPerson.id} already exists`
                    )
                })
        }
    }

    return (
        <form onSubmit={addPerson}>
            <div>
                name: <input required value={newName} onChange={handleNameChange}/>
            </div>
            <div>
                number: <input required value={newNumber} onChange={handleNumberChange}/>
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm
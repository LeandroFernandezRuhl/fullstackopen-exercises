const PersonForm = ({newName, setNewName, newNumber, setNewNumber, persons, setPersons}) => {

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    const addName = (event) => {
        event.preventDefault()
        const personObject = {
            name: newName,
            number: newNumber,
            id: persons.length + 1
        }
        if (persons.some(obj => personObject.name == obj.name || personObject.number == obj.number)) {
            alert(`${personObject.name} or ${personObject.number} is already added in the phonebook`)
        } else {
            setPersons(persons.concat(personObject))
            setNewName("")
            setNewNumber("")
        }
    }

    return (
        <form onSubmit={addName}>
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
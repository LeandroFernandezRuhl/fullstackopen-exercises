import {useEffect, useState} from 'react'
import Persons from "./components/Persons"
import PersonForm from "./components/PersonForm"
import Filter from "./components/Filter"
import personService from "./services/persons"
import Notification from "./components/Notification";

const App = () => {
    const [persons, setPersons] = useState([])

    useEffect(() => {
        personService
            .getAll()
            .then(initialPersons => {
                setPersons(initialPersons)
            })
    }, [])

    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filterName, setFilterName] = useState('')
    const [notification, setNotification] = useState({
        message: null,
        causedByAnError: false
    })

    return (
        <div>
            <h2>Phonebook</h2>
            <Notification notification={notification} />
            <Filter filterName={filterName} setFilterName={setFilterName}/>
            <h2>Add a new person</h2>
            <PersonForm
                newName={newName} setNewName={setNewName}
                newNumber={newNumber} setNewNumber={setNewNumber}
                persons={persons} setPersons={setPersons}
                setNotification={setNotification}
            />
            <h2>Numbers</h2>
            <Persons persons={persons} setPersons={setPersons} filterName={filterName}/>
        </div>
    )
}

export default App

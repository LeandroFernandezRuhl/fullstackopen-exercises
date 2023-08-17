import AnecdoteForm from "./components/AnecdoteForm";
import AnecdoteList from "./components/AnecdoteList";
import VisibilityFilter from "./components/VisibilityFilter"
import Notification from "./components/Notification";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import anecdotes from "./services/anecdotes";
import {setNotes} from "./reducers/anecdoteReducer";

const App = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        anecdotes.getAll().then(anecdotes => {
            dispatch(setNotes(anecdotes))
        })
    }, [dispatch]);

    return (
        <div>
            <Notification />
            <h2>Anecdotes</h2>
            <VisibilityFilter />
            <AnecdoteList/>
            <AnecdoteForm/>
        </div>
    )
}

export default App
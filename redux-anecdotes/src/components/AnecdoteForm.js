import {useDispatch} from "react-redux";
import {createAnecdote} from "../reducers/anecdoteReducer";
import {deleteNotification, newNoteNotification} from "../reducers/notificationReducer";
import anecdotes from "../services/anecdotes";

const AnecdoteForm = () => {
    const dispatch = useDispatch()
    const addAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        const savedAnecdote = await anecdotes.createNew(content)
        dispatch(createAnecdote(savedAnecdote))
        dispatch(newNoteNotification(content))
        setTimeout(() => {
            dispatch(deleteNotification());
        }, 5000);
    }

    return (
        <>
            <h2>create new</h2>
            <form onSubmit={addAnecdote}>
                <div>
                    <input name='anecdote'/>
                </div>
                <button type='submit'>create</button>
            </form>
        </>
    )
}

export default AnecdoteForm
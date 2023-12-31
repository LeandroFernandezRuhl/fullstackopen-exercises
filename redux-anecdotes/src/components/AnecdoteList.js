import {toggleImportanceOf, voteAnecdote} from "../reducers/anecdoteReducer";
import {useDispatch, useSelector} from "react-redux";
import {setNotification} from "../reducers/notificationReducer";

const AnecdoteList = () => {
    const dispatch = useDispatch()
    const anecdotes = useSelector(({anecdotes, filter}) => {
        if (filter === 'ALL')
            return anecdotes
        return filter === 'IMPORTANT'
            ? anecdotes.filter(anecdote => anecdote.important)
            : anecdotes.filter(anecdote => !anecdote.important)
    })
    const anecdotesCopy = [...anecdotes].sort((a, b) => {
        return a.votes - b.votes; // Sort in descending order by votes
    });
    const handleVote = (anecdote) => {
        dispatch(voteAnecdote(anecdote));
        dispatch(setNotification(`you voted '${anecdote.content}'`));
        //if I wanted to ensure that the vote goes through the backend before showing feedback to the user
        //dispatch(SetNotification(... should be moved inside the voteAnecdote thunk and
        //await for the completion of dispatch(vote(updatedAnecdote))
    }

    return (
        <>
            {
                anecdotesCopy.map(anecdote =>
                    <div key={anecdote.id}>
                        <div>
                            {anecdote.content}
                        </div>
                        <div>
                            has {anecdote.votes}
                            <button onClick={() => handleVote(anecdote)}>vote</button>
                            <button onClick={() => dispatch(toggleImportanceOf(anecdote.id))}>toggle importance</button>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default AnecdoteList
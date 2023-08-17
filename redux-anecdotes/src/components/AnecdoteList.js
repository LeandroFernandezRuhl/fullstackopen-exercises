import {toggleImportanceOf, vote} from "../reducers/anecdoteReducer";
import {useDispatch, useSelector} from "react-redux";
import {deleteNotification, voteNotification} from "../reducers/notificationReducer";

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
    const handleVote = ({ content, id }) => {
        dispatch(vote(id));
        dispatch(voteNotification(content));
        setTimeout(() => {
            dispatch(deleteNotification());
        }, 5000); // 5000 milliseconds (5 seconds)
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
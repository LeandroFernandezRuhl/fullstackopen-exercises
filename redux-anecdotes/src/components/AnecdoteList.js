import {toggleImportance, vote} from "../reducers/anecdoteReducer";
import {useDispatch, useSelector} from "react-redux";

const AnecdoteList = () => {
    const anecdotes = useSelector(state => {
        if (state.filter === 'ALL')
            return state.anecdotes
        return state.filter === 'IMPORTANT'
            ? state.anecdotes.filter(anecdote => anecdote.important)
            : state.anecdotes.filter(anecdote => !anecdote.important)
    })
        .sort((a, b) => {
            return a.votes - b.votes
        })
    const dispatch = useDispatch()

    return (
        <>
            {
                anecdotes.map(anecdote =>
                    <div key={anecdote.id}>
                        <div>
                            {anecdote.content}
                        </div>
                        <div>
                            has {anecdote.votes}
                            <button onClick={() => dispatch(vote(anecdote.id))}>vote</button>
                            <button onClick={() => dispatch(toggleImportance(anecdote.id))}>toggle importance</button>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default AnecdoteList
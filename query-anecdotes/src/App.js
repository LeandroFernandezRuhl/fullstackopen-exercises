import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import {useMutation, useQuery, useQueryClient} from "react-query";
import {getAnecdotes, voteAnecdote} from "./services/anecdoteService";
import {useContext} from "react";
import {NotificationContext} from "./NotificationContext";

const App = () => {
    const [notification, dispatch]= useContext(NotificationContext)

    const queryClient = useQueryClient()

    const voteMutation = useMutation(voteAnecdote, {
        onSuccess: (updatedAnecdote) => {
            const anecdotes = queryClient.getQueryData('anecdotes')
            queryClient.setQueryData('anecdotes', anecdotes
                .map(anecdote => anecdote.id !== updatedAnecdote.id ? anecdote : updatedAnecdote))
        }
    })
    const handleVote = (anecdote) => {
        voteMutation.mutate(anecdote)
        dispatch(`you voted '${anecdote.content}'`)
    }

    const {isLoading, isError, data, error} = useQuery('anecdotes', getAnecdotes, {
        refetchOnWindowFocus: false
    })

    if (isLoading) {
        return <div>loading data...</div>
    }

    if (isError) {
        return <span>Error: {error.message}</span>
    }

    return (
        <div>
            <h3>Anecdote app</h3>
            <Notification/>
            <AnecdoteForm/>
            {data.map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => handleVote(anecdote)}>vote</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default App

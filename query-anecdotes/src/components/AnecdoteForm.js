import {useMutation, useQueryClient} from "react-query";
import {createAnecdote} from "../services/anecdoteService";
import {NotificationContext} from "../NotificationContext";
import {useContext} from "react";

const AnecdoteForm = () => {
    const [notification, dispatch]= useContext(NotificationContext)
    const queryClient = useQueryClient()
    const newAnecdoteMutation = useMutation(createAnecdote, {
        onSuccess: (newAnecdote) => {
            const anecdotes = queryClient.getQueryData('anecdotes')
            queryClient.setQueryData('anecdotes', anecdotes.concat(newAnecdote))
        },
        onError: (err) => {
            dispatch(`${err.request.response}`)
        }
    })

    const onCreate = (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        newAnecdoteMutation.mutate({content, votes: 0})
        dispatch(`you added '${content}'`)
    }

    return (
        <div>
            <h3>create new</h3>
            <form onSubmit={onCreate}>
                <input name='anecdote'/>
                <button type="submit">create</button>
            </form>
        </div>
    )
}

export default AnecdoteForm

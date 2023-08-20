import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

export const getAnecdotes = async () => {
    const res = await axios.get(baseUrl)
    return res.data
}

export const createAnecdote = async (newAnecdote) => {
    const res = await axios.post(baseUrl, newAnecdote)
    return res.data
}

export const voteAnecdote = async (anecdoteToUpdate) => {
    const res = await axios.put(`${baseUrl}/${anecdoteToUpdate.id}`,
        {...anecdoteToUpdate, votes: anecdoteToUpdate.votes + 1})
    return res.data
}
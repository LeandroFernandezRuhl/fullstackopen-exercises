import {createSlice} from "@reduxjs/toolkit";

const anecdoteSlice = createSlice({
    name: 'anecdotes',
    initialState: [],
    reducers: {
        createAnecdote(state, action) {
            state.push(action.payload)
        },
        setNotes(state, action) {
          return action.payload
        },
        toggleImportanceOf(state, action) {
            const toggleId = action.payload
            const anecdoteToToggle = state.find(n => n.id === toggleId)
            const toggledAnecdote = {
                ...anecdoteToToggle,
                important: !anecdoteToToggle.important
            }
            return state.map(anecdote =>
                anecdote.id !== toggleId ? anecdote : toggledAnecdote
            )
        },
        vote(state, action) {
            const id = action.payload
            const anecdoteToChange = state.find(n => n.id === id)
            const changedAnecdote = {
                ...anecdoteToChange,
                votes: anecdoteToChange.votes + 1
            }
            return state.map(anecdote =>
                anecdote.id !== id ? anecdote : changedAnecdote
            )
        },
    }
})

export const { setNotes, createAnecdote, toggleImportanceOf, vote } = anecdoteSlice.actions
export default anecdoteSlice.reducer
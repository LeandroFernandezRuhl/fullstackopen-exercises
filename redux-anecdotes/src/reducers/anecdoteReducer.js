import {createSlice} from "@reduxjs/toolkit";
import anecdoteService from "../services/anecdoteService";


const anecdoteSlice = createSlice({
    name: 'anecdotes',
    initialState: [],
    reducers: {
        appendAnecdote(state, action) {
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
            const updatedAnecdote = action.payload
            return state.map(anecdote =>
                anecdote.id !== updatedAnecdote.id ? anecdote : updatedAnecdote
            )
        },
    }
})

export const initializeAnecdotes = () => {
    return async dispatch => {
        const anecdotes = await anecdoteService.getAll()
        dispatch(setNotes(anecdotes))
    }
}

export const createAnecdote = content => {
    return async dispatch => {
        const newAnecdote = await anecdoteService.createNew(content)
        dispatch(appendAnecdote(newAnecdote))
    }
}

export const voteAnecdote = id => {
    return async dispatch => {
        const updatedAnecdote = await anecdoteService.updateVotes(id)
        dispatch(vote(updatedAnecdote))
    }
}

export const { setNotes, appendAnecdote, toggleImportanceOf, vote } = anecdoteSlice.actions
export default anecdoteSlice.reducer
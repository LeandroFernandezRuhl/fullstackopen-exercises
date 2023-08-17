import {createSlice} from "@reduxjs/toolkit";

const notificationSlice = createSlice({
    name: 'notification',
    initialState: '',
    reducers: {
        voteNotification(state, action) {
            return `you voted '${action.payload}'`
        },
        newNoteNotification(state, action) {
            return `you added '${action.payload}'`
        },
        deleteNotification(state, action) {
            return ''
        }
    }
})

export const { newNoteNotification, voteNotification, deleteNotification } = notificationSlice.actions
export default notificationSlice.reducer
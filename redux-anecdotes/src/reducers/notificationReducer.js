import {createSlice} from "@reduxjs/toolkit";

const notificationSlice = createSlice({
    name: 'notification',
    initialState: '',
    reducers: {
        createNotification(state, action) {
            return action.payload
        },
        deleteNotification(state, action) {
            return ''
        }
    }
})

export const setNotification = (notificationMessage) => {
    return dispatch => {
        dispatch(createNotification(notificationMessage))
        setTimeout(() => {
            dispatch(deleteNotification())
        }, 5000)
    }
}

export const {createNotification, voteNotification, deleteNotification} = notificationSlice.actions
export default notificationSlice.reducer
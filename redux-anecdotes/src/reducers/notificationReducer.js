import {createSlice} from "@reduxjs/toolkit";

const notificationSlice = createSlice({
    name: 'notification',
    initialState: {
        message: '',
        timeoutId: null,
    },
    reducers: {
        createNotification(state, action) {
            return {...state, message: action.payload}
        },
        deleteNotification(state, action) {
            return {...state, message: ''}
        },
        setTimeoutId(state, action) {
            state.timeoutId = action.payload;
        },
    }
})

export const setNotification = (notificationMessage) => {
    return (dispatch, getState) => {
        dispatch(createNotification(notificationMessage));

        const {notification} = getState(); // Get the current state
        // If timeoutId is not set, set a timeout and update the timeoutId
        if (notification.timeoutId !== null) {
            clearTimeout(notification.timeoutId)
        }
        const timeoutId = setTimeout(() => {
            dispatch(deleteNotification());
            dispatch(setTimeoutId(null));
        }, 5000);
        dispatch(setTimeoutId(timeoutId)); // Dispatch action to update timeoutId

    };
}
// another way of doing this: https://i.stack.imgur.com/QZIDE.png

export const {createNotification, setTimeoutId, voteNotification, deleteNotification} = notificationSlice.actions
export default notificationSlice.reducer
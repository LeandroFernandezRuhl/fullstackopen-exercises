import React, { createContext, useReducer } from 'react';

const notificationReducer = (state, action) => {
    switch (action.type) {
        case 'CREATE_NOTIFICATION':
            return { ...state, message: action.payload };
        case 'DELETE_NOTIFICATION':
            return { ...state, message: '' };
        case 'SET_TIMEOUT_ID':
            return { ...state, timeoutId: action.payload };
        default:
            return state;
    }
};

const NotificationContext = createContext();

const initialState = {
    message: '',
    timeoutId: null,
};

const NotificationProvider = (props) => {
    const [state, dispatch] = useReducer(notificationReducer, initialState);

    const setNotification = (notificationMessage) => {
        dispatch({ type: 'CREATE_NOTIFICATION', payload: notificationMessage });

        if (state.timeoutId !== null) {
            clearTimeout(state.timeoutId);
        }

        const timeoutId = setTimeout(() => {
            dispatch({ type: 'DELETE_NOTIFICATION' });
            dispatch({ type: 'SET_TIMEOUT_ID', payload: null });
        }, 5000);

        dispatch({ type: 'SET_TIMEOUT_ID', payload: timeoutId });
    };

    return (
        <NotificationContext.Provider value={[ state, setNotification ]}>
            {props.children}
        </NotificationContext.Provider>
    );
};

export { NotificationProvider, NotificationContext };

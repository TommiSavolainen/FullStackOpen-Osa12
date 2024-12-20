import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// export const setNotification = createAsyncThunk('notification/setNotification', async (message, thunkAPI) => {
//     thunkAPI.dispatch(showNotification(message));
//     setTimeout(() => {
//         thunkAPI.dispatch(clearNotification());
//     }, 5000);
// });
export const setNotification = createAsyncThunk('notification/setNotification', async (args, thunkAPI) => {
    const [message, duration] = args;
    thunkAPI.dispatch(showNotification(message));
    setTimeout(() => {
        thunkAPI.dispatch(clearNotification());
    }, duration * 1000);
});

const notificationSlice = createSlice({
    name: 'notification',
    initialState: 'Tervetuloa!', // Alkuarvo
    reducers: {
        showNotification: (state, action) => {
            return action.payload;
        },
        clearNotification: () => {
            return '';
        },
    },
});

export const { showNotification, clearNotification } = notificationSlice.actions;

export default notificationSlice.reducer;

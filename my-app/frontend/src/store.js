import { configureStore } from '@reduxjs/toolkit';
import anecdoteReducer, { setAnecdotes } from './reducers/anecdoteReducer';
import filterReducer from './reducers/filterReducer';
import notificationReducer from './reducers/notificationReducer';
import anecdoteService from './services/anecdotes';

const initializeStore = () => {
    return async (dispatch) => {
        let anecdotes = await anecdoteService.getAll();
        anecdotes = anecdotes.sort((a, b) => b.votes - a.votes);
        console.log('anecdotes2', anecdotes);
        dispatch(setAnecdotes(anecdotes));
        console.log(store.getState());
    };
};

const store = configureStore({
    reducer: {
        anecdotes: anecdoteReducer,
        filter: filterReducer,
        notification: notificationReducer,
    },
});
store.dispatch(initializeStore());
export default store;

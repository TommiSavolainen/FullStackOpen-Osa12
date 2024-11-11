import { createSlice } from '@reduxjs/toolkit';
import anecdoteService from '../services/anecdotes';
/* eslint-disable no-case-declarations */

const anecdoteSlice = createSlice({
    name: 'anecdotes',
    initialState: [],
    reducers: {
        vote: (state, action) => {
            const id = action.payload.id;
            const anecdoteToChange = state.find((anecdote) => anecdote.id === id);
            anecdoteToChange.votes = action.payload.votes;
            return state.sort((a, b) => b.votes - a.votes);
        },
        // vote(state, action) {
        //     console.log('action', action);
        //     console.log('state', state);
        //     const id = action.payload;
        //     console.log('id', id);
        //     const anecdoteToChange = state.find((n) => n.id === id);
        //     console.log('anecdoteToChange', anecdoteToChange);
        //     anecdoteToChange.votes += 1;

        //     return state.sort((a, b) => b.votes - a.votes);
        // },
        // createNew(state, action) {
        //     state.push(action.payload);
        // },
        appendAnecdote(state, action) {
            state.push(action.payload);
        },
        setAnecdotes(state, action) {
            return action.payload.sort((a, b) => b.votes - a.votes);
        },
    },
});

export const { createNew, appendAnecdote, setAnecdotes } = anecdoteSlice.actions;
export const createAnecdote = (content) => {
    return async (dispatch) => {
        const newAnecdote = await anecdoteService.createNew(content);
        dispatch(appendAnecdote(newAnecdote));
    };
};
export const vote = (id) => {
    return async (dispatch, getState) => {
        // Hae nykyinen anekdootti Redux storesta
        const anecdoteToChange = getState().anecdotes.find((n) => n.id === id);

        // Päivitä anekdootin äänet backendissä
        const updatedAnecdote = await anecdoteService.update(anecdoteToChange.id, {
            ...anecdoteToChange,
            votes: anecdoteToChange.votes + 1,
        });

        // Päivitä Redux store
        dispatch({
            type: 'anecdotes/vote',
            payload: updatedAnecdote,
        });
    };
};

export default anecdoteSlice.reducer;

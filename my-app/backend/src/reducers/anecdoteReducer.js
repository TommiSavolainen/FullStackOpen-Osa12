import { createSlice } from '@reduxjs/toolkit';
/* eslint-disable no-case-declarations */
// const anecdotesAtStart = [
//     'If it hurts, do it more often',
//     'Adding manpower to a late software project makes it later!',
//     'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
//     'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
//     'Premature optimization is the root of all evil.',
//     'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
// ];

// const getId = () => (100000 * Math.random()).toFixed(0);

// const asObject = (anecdote) => {
//     return {
//         content: anecdote,
//         id: getId(),
//         votes: 0,
//     };
// };
const anecdoteSlice = createSlice({
    name: 'anecdotes',
    initialState: [],
    reducers: {
        vote(state, action) {
            console.log('action', action);
            console.log('state', state);
            const id = Number(action.payload);
            console.log('id', id);
            const anecdoteToChange = state.find((n) => Number(n.id) === id);
            console.log('anecdoteToChange', anecdoteToChange);
            anecdoteToChange.votes += 1;
            return state.sort((a, b) => b.votes - a.votes);
        },
        createNew(state, action) {
            state.push(action.payload);
        },
        appendAnecdote(state, action) {
            state.push(action.payload);
        },
        setAnecdotes(state, action) {
            return action.payload;
        },
    },
});

// const initialState = anecdotesAtStart.map(asObject);

// const reducer = (state = initialState, action) => {
//     console.log('state now: ', state);
//     console.log('action', action);

//     switch (action.type) {
//         case 'VOTE':
//             const id = action.data.id;
//             const anecdoteToChange = state.find((n) => n.id === id);
//             const changedAnecdote = { ...anecdoteToChange, votes: anecdoteToChange.votes + 1 };
//             state = state.map((anecdote) => (anecdote.id !== id ? anecdote : changedAnecdote));
//             break;
//         case 'NEW_ANECDOTE':
//             state = [...state, asObject(action.data)];
//             break;
//         default:
//             return state;
//     }

//     return state.sort((a, b) => b.votes - a.votes);
// };
// export const vote = (id) => {
//     return {
//         type: 'VOTE',
//         data: { id },
//     };
// };

// export const createNew = (content) => {
//     return {
//         type: 'NEW_ANECDOTE',
//         data: content,
//     };
// };
export const { vote, createNew, appendAnecdote, setAnecdotes } = anecdoteSlice.actions;
export default anecdoteSlice.reducer;

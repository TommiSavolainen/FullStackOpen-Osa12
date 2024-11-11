import { useSelector, useDispatch } from 'react-redux';
import { vote } from '../reducers/anecdoteReducer';
import { setNotification } from '../reducers/notificationReducer';

const AnecdoteList = () => {
    const dispatch = useDispatch();
    const filter = useSelector((state) => state.filter);
    const anecdotes = useSelector((state) => state.anecdotes);
    const anecdotesToShow = anecdotes.filter((anecdote) => 
        !filter || (anecdote.content && anecdote.content.includes(filter))
    );
    const voteAnecdote = (id) => {
        console.log('vote', id);
        dispatch(vote(id));
        dispatch(setNotification(`You voted for ${anecdotes.find((n) => n.id === id).content}`));
    };

    return (
        <div>
            {anecdotesToShow.map((anecdote) => (
                <div key={anecdote.id}>
                    <div>{anecdote.content}</div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => voteAnecdote(anecdote.id)}>vote</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AnecdoteList;

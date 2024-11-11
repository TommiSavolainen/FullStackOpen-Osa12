import { useDispatch } from 'react-redux';
import { createNew } from '../reducers/anecdoteReducer';
import { setNotification } from '../reducers/notificationReducer';
import anecdoteService from '../services/anecdotes';
const AnecdoteForm = () => {
    const dispatch = useDispatch();

    const createNewAnecdote = async (event) => {
        event.preventDefault();
        const content = event.target.new.value;
        event.target.new.value = '';
        const newAnecdote = await anecdoteService.createNew(content);
        dispatch(createNew(newAnecdote));
        dispatch(setNotification(`You created '${content}'`));
    };

    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={createNewAnecdote}>
                <div>
                    <input name="new" />
                </div>
                <button type="submit">create</button>
            </form>
        </div>
    );
};

export default AnecdoteForm;

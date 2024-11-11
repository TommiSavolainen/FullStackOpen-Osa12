import { filterChange } from '../reducers/filterReducer';
import { useDispatch } from 'react-redux';
// import { vote } from '../reducers/anecdoteReducer';

const Filter = () => {
    const dispatch = useDispatch();
    // const filter = useSelector((state) => state.filter);
    // const anecdotes = useSelector((state) => state.anecdotes);
    // console.log('filter', filter);
    // console.log('anecdotes', anecdotes);
    // const anecdotesToShow = anecdotes.filter((anecdote) => anecdote.content && filter && anecdote.content.includes(filter));
    // console.log('anecdotesToShow', anecdotesToShow);
    const handleFilterChange = (e) => {
        dispatch(filterChange(e.target.value));
        
    };
    const style = {
        marginBottom: 10,
    };
    return (
        <div style={style}>
            <div>
            filter <input name="filter" onChange={(e) => handleFilterChange(e)} />
            </div>
            {/* <br />
            {anecdotesToShow.map((anecdote) => 
                <div key={anecdote.id}>
                    {anecdote.content}
                <div>
                    has {anecdote.votes}
                    <button onClick={() => dispatch(vote(anecdote.id))}>vote</button>
                </div>
                </div>
            )} */}
            
        </div>
    );
};
export default Filter;

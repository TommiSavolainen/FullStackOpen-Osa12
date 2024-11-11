import ReactDOM from 'react-dom/client'
import store from './store'
import { Provider } from 'react-redux'
import App from './App'
import anecdoteService from './services/anecdotes'
import {setAnecdotes} from './reducers/anecdoteReducer'

anecdoteService.getAll().then(anecdotes =>
  anecdotes.forEach(anecdote =>
    store.dispatch(setAnecdotes(anecdote))
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
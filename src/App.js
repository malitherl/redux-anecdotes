import Notification from './components/Notification'
import AnecdoteList from './components/AnecdoteList'
import AnecdoteForm from './components/AnecdoteForm'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import anecdoteService from '../services/anecdote'
import setAnecdotes from '../services/anecdoteReducer'
const App = () => {
  
  const dispatch = useDispatch();
  useEffect(() => {
    anecdoteService.getAll()
    .then(anecdotes => dispatch(setAnecdotes(anecdotes))) 
  }, [dispatch])


    return(
      <div> 
        <Notification/>
        <h2>Anecdotes</h2>
        <AnecdoteList />
        <AnecdoteForm />
      </div>
    )
   
  
}

export default App
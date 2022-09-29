import { useDispatch, useSelector } from 'react-redux'
import { vote, createNew } from './reducers/anecdoteReducer'
import { useState } from 'react'
const App = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => state)
  const [quote, setQuote] = useState('');
  const addVote = (id) => {
    console.log(id)
    dispatch(vote(id))
  }

  const addAnecdote = (event) => {
    event.preventDefault()
    dispatch(createNew(quote))
    setQuote('')
  }

  const handleChange = (event) => setQuote(event.target.value)

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => addVote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div>
          <input type="text" onChange={handleChange} placeholder='penny for your thoughts?' value={quote}/>
        </div>
        <button type='submit'>create</button>
      </form>
    </div>
  )
}

export default App
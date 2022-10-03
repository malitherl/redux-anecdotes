import { connect } from 'react-redux'
import { useState } from 'react'
import { setNotification } from '../reducers/notificationReducer'
import { createNew } from '../reducers/anecdoteReducer'
import anecdoteService from '../services/anecdote'
const AnecdoteForm = (  props ) => {
  const [quote, setQuote] = useState('');

  const addAnecdote = async (event) => {
    event.preventDefault()
    const newAnecdote = await anecdoteService.createNew(quote)
    props.createNew(newAnecdote)
    props.setNotification(`You have added ${quote}`, 5)
    setQuote('')
  }

  const handleChange = (event) => setQuote(event.target.value)

    return(
        <div>
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

const ConnectedAnecdoteForms = connect(
  null, 
  {createNew, setNotification}
)(AnecdoteForm)

export default ConnectedAnecdoteForms
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { createNew } from '../reducers/anecdoteReducer'
import { messageChange, messageDefault } from '../reducers/notificationReducer'
const AnecdoteForm = () => {
  const [quote, setQuote] = useState('');
  const dispatch = useDispatch() 
  const addAnecdote = (event) => {
    event.preventDefault()
    dispatch(createNew(quote))
    dispatch(messageChange(`You have added ${quote}`))
    setTimeout(() => dispatch(messageDefault('')), 5000)
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

export default AnecdoteForm
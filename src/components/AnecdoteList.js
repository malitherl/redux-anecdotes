import { useDispatch, useSelector } from 'react-redux'
import { updateVotes } from '../reducers/anecdoteReducer'
import { messageDefault, messageChange } from '../reducers/notificationReducer'
import { setNotification } from '../reducers/notificationReducer'
const AnecdoteList = () => {
const dispatch = useDispatch()
  const anecdotes = useSelector(({votes}) => {
    const votesCopy = [...votes]
    return votesCopy.sort((a,b) => b.votes - a.votes)
  })

  const addVote = (anecdote) => {
    dispatch(setNotification(`You have voted for ${anecdote}`, 5))
  }
 
  return (
    <div>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => {
              dispatch(updateVotes(anecdote, anecdote.id))
              addVote(anecdote.content)
              }}>vote</button>
          </div>
        </div>
      )}
    </div>
)}

export default AnecdoteList; 
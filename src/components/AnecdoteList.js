import { useDispatch, useSelector } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { messageDefault, messageChange } from '../reducers/notificationReducer'
const AnecdoteList = () => {
const dispatch = useDispatch()
  const anecdotes = useSelector(({votes}) => {
    const votesCopy = [...votes]
    return votesCopy.sort((a,b) => b.votes - a.votes)
  })

  const addVote = (anecdote) => {

    dispatch(messageChange(`You have voted for ${anecdote}`))
    setTimeout(() => dispatch(messageDefault('')), 5000)
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
              dispatch(vote(anecdote.id))
              addVote(anecdote.content)
              }}>vote</button>
          </div>
        </div>
      )}
    </div>
)}

export default AnecdoteList; 
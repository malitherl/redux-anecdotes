const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

export const vote = (id) => {
  console.log('vote', id)
  return {
    type: 'VOTE',
    id: {id}
  }
}

export const createNew = (anec) => {
  console.log('new anecdote', anec)
  return {
    type: 'NEW',
    anecdote: asObject(anec)
  }
}


const initialState = anecdotesAtStart.map(asObject)
console.log(initialState)

const voteReducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action', action)
  switch(action.type){
    case 'VOTE': 
    const id = action.id.id
    console.log(state)
    const anecdoteToChange = state.find(element => element.id === id)
    const updatedAnecdote= { 
      ...anecdoteToChange, 
      votes: anecdoteToChange.votes++
    }
    console.log(updatedAnecdote)
    return state.map(a => a.id !== action.id ? a : updatedAnecdote)
    case 'NEW': 
    const anecdote = action.anecdote
    return [...state, anecdote]
    default: 
    return state
  }
}

export default voteReducer
